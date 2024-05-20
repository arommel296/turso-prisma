import { OnModuleInit } from "@nestjs/common";
import {PrismaClient} from "@prisma/client";

export class PrismaService extends PrismaClient implements OnModuleInit{
    async onModuleInit() {
        console.log("PrismaService iniciado");
        await this.$connect();
        this.$extends({model: this.user})
    }
}