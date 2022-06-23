import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { sign } from "jsonwebtoken";

interface IRequest {
    email: string;
    password: string;
}

@injectable()
class AuthenticateUserUserCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest) {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new Error('Email or password incorrect!');
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Email or password incorrect!');
        }

        const token = sign({}, )
    }
}

export { AuthenticateUserUserCase }