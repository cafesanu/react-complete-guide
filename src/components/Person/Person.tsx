/* eslint-disable @typescript-eslint/unbound-method */
import './Person.scss';
import React, { FunctionComponent, PropsWithChildren, SyntheticEvent, ChangeEvent } from 'react';

interface PersonProps {
  name: string;
  age: number;
  click(): void;
}

export const Person: FunctionComponent<PersonProps> = (props: PropsWithChildren<PersonProps>): JSX.Element => {
  return (
    <div className="Person" onClick={props.click}>
      <p>Hi, I am {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
    </div>
  );
};
