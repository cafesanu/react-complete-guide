import './AppContainer.scss';
import React, { useState } from 'react';
import { appContainerStyles } from './AppContainerStyles';
import { Nullable, FunctionOf, JsxComponent } from '../../interfaces/primitivesInterface';
import { Person } from '../Person/Person';
import { createUseStyles } from 'react-jss';

interface Person {
  id: number;
  name: string;
  age: number;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ComponentDefaultProps {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ComponentProps extends ComponentDefaultProps {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ComponentState {
  persons: Person[];
  showPersons: boolean;
}

interface ButtonProps {
  backgroundColor: string;
}

const useStyles: (props?: unknown) => Record<string, string> = createUseStyles({
  myButton: {
    '&:hover': {
      backgroundColor: '#fff'
    },
    backgroundColor: (props: ButtonProps) => props.backgroundColor,
    border: '1px solid black',
    font: 'inherit',
    padding: '8px'
  }
});

// eslint-disable-next-line @typescript-eslint/typedef
const Button: JsxComponent = ({ children, ...props }) => {
  const classes: Record<string, string> = useStyles(props);

  return (
    <button
      className={classes.myButton}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export const AppContainer = (): JSX.Element => {
  const [
    personsState,
    setPersonsState
  ] = useState<ComponentState>({
    persons: [
      {
        age: 36,
        id: 1,
        name: 'Carlos'
      },
      {
        age: 38,
        id: 2,
        name: 'Julie'
      }
    ],
    showPersons: true
  });

  const deletePersonHandler = (index: number): void => {
    setPersonsState({
      ...personsState,
      persons: [
        ...personsState.persons.slice(0, index), // eslint-disable-line @typescript-eslint/no-magic-numbers
        ...personsState.persons.slice(index + 1) // eslint-disable-line @typescript-eslint/no-magic-numbers
      ]
    });
  };

  const togglePerson = (): void => {
    setPersonsState({
      ...personsState,
      showPersons: !personsState.showPersons
    });
  };

  const renderPersons = (): Nullable<JSX.Element> => {
    if (personsState.showPersons) {
      return (
        <>
          {
            personsState.persons.map((person: Person, index: number) => (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => deletePersonHandler(index)}
              >
                I like to play the guitar.
              </Person>
            ))
          }
        </>
      );
    }

    return null;
  };

  return (
    <div className="AppContainer">
      <Button
        backgroundColor={
          personsState.showPersons
            ? '#080'
            : '#09f'
        }
        onClick={togglePerson}
      >
        Hello
      </Button>
      {renderPersons()}
    </div>
  );
};
