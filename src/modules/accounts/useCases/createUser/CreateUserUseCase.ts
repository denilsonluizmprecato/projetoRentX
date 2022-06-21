import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository) {};

    async execute({name, username, email, driver_license, password}: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            name,
            username,
            email,
            driver_license,
            password,
        });
    }
}

export { CreateUserUseCase }