import { Styles } from '../../interfaces/primitivesInterface';

export const appContainerStyles = (buttonColor: string = '#5af'): Styles => ({
  myButton: {
    backgroundColor: buttonColor,
    border: 'padding',
    font: 'inherit',
    padding: '8px'
  }
});
