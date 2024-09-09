import NotificationModel from "@/model/Notification";
import ProductModel from "@/model/Product";
import SalesModel from "@/model/Sales";
import UserModel from "@/model/User";
import { fakerJA } from "@faker-js/faker";

export const generateFakeUsers = (count: number): UserModel[] => {
    const fakeUsers: UserModel[] = [];

    for (let index = 0; index < count; index++) {
        const user = new UserModel();
        user.id = index + 1;
        user.username = fakerJA.person.fullName();
        user.mail = fakerJA.internet.email();
        fakeUsers.push(user);
    }

    return fakeUsers;
}

export const generateFakeProducts = (count: number): ProductModel[] => {
    const fakeProducts: ProductModel[] = [];

    for (let index = 0; index < count; index++) {
        const product = new ProductModel();
        product.id = index + 1;
        product.name = fakerJA.commerce.productName();
        product.price = Number(fakerJA.commerce.price({ max: 1000, min: 300, dec: 0}));
        product.cost = Number(fakerJA.commerce.price({
            max: product.price -100,
            dec: 2
        }));
        fakeProducts.push(product);
    }

    return fakeProducts;
}

export const generateFakeNotifications = (count: number): NotificationModel[] => {
    const fakeNotifications: NotificationModel[] = [];

    for (let index = 0; index < count; index++) {
        const notification = new NotificationModel();
        notification.id = index + 1;
        notification.title = fakerJA.lorem.sentence();
        notification.message = fakerJA.lorem.text();
        notification.notifiedDate = fakerJA.date.recent();

        fakeNotifications.push(notification);
    }

    return fakeNotifications;
}

export const generateFakeSales = (count: number) => {
    const salesList: SalesModel[] = [];
    for (let index = 0; index < count; index++) {
        const sales = new SalesModel();
        sales.total = Number(fakerJA.commerce.price({ max: 3000, min: 100, dec: 0}));
        sales.billTo = generateFakeUsers(1)[0];
        sales.products = generateFakeProducts(3);
        sales.willReceivedAt = fakerJA.date.between({ from: (new Date()).setMonth(-10), to: new Date()});
        sales.isReceived = fakerJA.number.int({max: 2, min: 1}) > 1;

        salesList.push(sales);
    }

    return salesList;
}
