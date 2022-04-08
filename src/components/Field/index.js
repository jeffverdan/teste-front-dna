import React from "react";
import Content from "./Content";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import Button from "./Button";

const Text = ({ label, type, name, placeholder, register }) => (  
  <Label>
    <Content>{ label }</Content>
    <Input className="form-control" type={ type } {...register(name, {required: "Required",})} name={ name } placeholder={ placeholder } />
  </Label>
)

const SelectComponent = React.forwardRef(({ label, name, value1, value2, value3, value4, value5, onChange}, ref) => (  
  <Label>
    <Content>{ label }</Content>
    <Select className="form-control" name={ name } ref={ ref } onChange={ onChange } >
      <option value={ value1 }>{ value1 }</option>
      <option value={ value2 }>{ value2 }</option>
      <option value={ value3 }>{ value3 }</option>
      {value4 ? <option value={ value4 }>{ value4 }</option> : null}
      {value5 ? <option value={ value5 }>{ value5 }</option> : null}
    </Select>
  </Label>
))

const ButtonComponent = ({ label, type }) => (
  <Label>    
    <Button className="btn" type={ type }>{ label }</Button>
  </Label>
)

const Field = {
  Text,
  SelectComponent,
  ButtonComponent,
};

export default Field;