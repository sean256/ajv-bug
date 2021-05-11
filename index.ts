import Ajv, {JSONSchemaType} from "ajv"

interface MyData {
  foo: number
  bar?: string
}

const schema: JSONSchemaType<MyData> = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string", nullable: "true"}
  },
  required: ["foo"],
  additionalProperties: false
}
