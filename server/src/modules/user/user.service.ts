import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "@/modules/prisma/prisma.service";
import { UserDetails } from "./interfaces/user-details.interface";
import { AuthType, Prisma } from "@prisma/client";
import { USER_MOD_ERROR_MESSAGE } from "./dto/constants/error-message";
import { USER_MOD_ERROR_CODES } from "./dto/constants/error-codes";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUserByPhoneNumber(phoneNumber: string) {
    return this.prisma.user.findUnique({
      where: { phoneNumber: phoneNumber },
    });
  }

  async findUserById(id: number) {
    return await this.prisma.withTransaction(async (client: PrismaService) => {
      return client.user.findUnique({
        where: {
          id,
        },
      });
    });
  }

  async createUser(
    { phoneNumber, email }: { phoneNumber?: string; email: string },
    userDetails: Partial<UserDetails>,
    client?: PrismaService
  ) {
    return await this.prisma.withTransaction(async (client: PrismaService) => {
      try {
        return await client.user.create({
          data: {
            phoneNumber: phoneNumber,
            email: email,
            userDetails: {
              create: {
                username: userDetails.username || "",
                dateOfBirth: userDetails.dateOfBirth
                  ? new Date(userDetails.dateOfBirth)
                  : new Date(),
                occupation: userDetails?.occupation || "",
                sector: userDetails?.sector || "",
                fullname: userDetails.fullName || "",
                authType: AuthType.LOCAL,
              },
            },
          },
        });
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          console.log(e);

          if (e.code === "P2002") {
            throw new BadRequestException({
              message: {
                error: USER_MOD_ERROR_MESSAGE.USER_EXIST,
                code: USER_MOD_ERROR_CODES.USER_EXIST,
                meta: e?.meta,
              },
            });
          }
        }
        throw new InternalServerErrorException();
      }
    }, client);
  }
}
