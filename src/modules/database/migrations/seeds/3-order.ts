import * as faker from 'faker/locale/pt_BR';
import * as Knex from 'knex';
import { IOrder } from 'modules/database/interfaces/order';

export async function seed(knex: Knex): Promise<any> {
  const orders = await knex
    .count()
    .from('Order')
    .first();

  if (Number(orders.count) > 0) {
    return;
  } else {
    for (let i = 0; i < 5; i++) {
      const order: IOrder = {
        description: `Description of order ${i}`,
        value: Number(faker.commerce.price()),
        createdDate: new Date(),
        updatedDate: new Date(),
        quantity: i * 5
      };

      await knex.insert(order).into('Order');
    }
  }
}
