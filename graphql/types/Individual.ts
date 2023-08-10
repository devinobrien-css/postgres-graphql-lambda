import { individual } from "nexus-prisma";
import { WhereClauseInput } from "./WhereClause";
import { arg, inputObjectType, objectType, queryType } from "nexus";
import { prisma } from "src";

const Individual = objectType({
    name: individual.$name,
    description: individual.$description,
    definition(t) {
      t.field(individual.individualid)
      t.field(individual.firstname)
      t.field(individual.lastname)
      t.field(individual.email)
    }
});

const IndividualsWhereInput = inputObjectType({
  name: 'IndividualsWhereInput',
  definition(t) {
    t.field('firstname', {type: WhereClauseInput});
    t.field('lastname', {type: WhereClauseInput});
    t.field('email', {type: WhereClauseInput});
  },
});

const IndividualsQuery = queryType({
    definition(t) {
      t.list.field('fetchIndividuals', {
        type: individual.$name,
        args: {
          where: arg({type: IndividualsWhereInput})
        },
        resolve: (_parent, args, _ctx) => {
          return prisma.individual.findMany({ 
            where: args.where
          });

        },
      });
    }
});

export {
    Individual,
    IndividualsQuery,
    IndividualsWhereInput
}