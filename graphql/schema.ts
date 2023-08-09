import { makeSchema, objectType, queryType }  from 'nexus'
import { individual, address } from 'nexus-prisma';
import { prisma } from 'src';

const Address = objectType({
  name: address.$name,
  description: individual.$description,
  definition(t) {
    t.field(address.addressid)
    t.field(address.individualid)
    t.field(address.line1)
    t.field(address.city)
    t.field(address.zip)
  }
})

// const AddressTypes = enumType({
//   name: 'Episode',
//   members: {
//     NEWHOPE: 4,
//     EMPIRE: 5,
//     JEDI: 6,
//   },
// })

const Individual = objectType({
    name: individual.$name,
    description: individual.$description,
    definition(t) {
      t.field(individual.individualid)
      t.field(individual.firstname)
      t.field(individual.lastname)
      t.field(individual.email)
    }
})

const IndividualsQuery = queryType({
    definition(t) {
      t.list.field('fetchIndividuals', {
        type: individual.$name,
        resolve: () => {
            return prisma.individual.findMany()
          },
      });
    }
});

const schema = makeSchema({
    types: {
      Address,
      Individual,
      IndividualsQuery
    },
    outputs: {
      schema: __dirname + "/generated/schema.graphql",
      typegen: __dirname + "/generated/nexus.ts",
    },
});

export { schema };