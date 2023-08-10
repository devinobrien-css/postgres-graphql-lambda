import { inputObjectType, objectType, queryType } from "nexus";
import { address } from "nexus-prisma";
import { prisma } from "src";

const Address = objectType({
    name: address.$name,
    description: address.$description,
    definition(t) {
      t.field(address.addressid)
      t.field(address.individualid)
      t.field(address.type)
      t.field(address.line1)
      t.field(address.city)
      t.field(address.state)
      t.field(address.zip)
    }
  });

  const AddressesWhereInput = inputObjectType({
    name: 'AddressesWhereInput',
    definition(t) {
      t.string('individualid');
    },
  });
  
  const AddressesQuery = queryType({
      definition(t) {
        t.list.field('fetchAddresses', {
          type: address.$name,
          args: {
            // where: {

            // }
          },
          resolve: (_parent, args, _ctx) => {
            return prisma.address.findMany({ 
              where: args.where
            });
  
          },
        });
      }
  });

  export {
    Address,
    AddressesQuery,
    AddressesWhereInput
  }