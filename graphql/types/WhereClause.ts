import { inputObjectType } from "nexus";

const WhereClauseInput = inputObjectType({
    name: "WhereClauseInput",
    definition(t){
      t.string('contains');
      t.string('equals');
      t.string('startsWith');
      t.string('endsWith');
    }
})

export {
    WhereClauseInput
}