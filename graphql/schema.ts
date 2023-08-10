import { makeSchema }  from 'nexus'
import { Individual,IndividualsQuery,IndividualsWhereInput } from './types/Individual';
import { Address } from './types/Address';

const schema = makeSchema({
    types: {
      Address,
      // AddressesQuery,
      // AddressesWhereInput,
      
      Individual,
      IndividualsQuery,
      IndividualsWhereInput,
    },
    outputs: {
      schema: __dirname + "/generated/schema.graphql",
      typegen: __dirname + "/generated/nexus.ts",
    },
});

export { schema };