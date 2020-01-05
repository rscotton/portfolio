import React from 'react';
import cn from 'classnames';
import Container from '@components/Container';
import componentStyles from './styles.module.scss';

type GridColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: GridColumnWidth;
  sm?: GridColumnWidth;
  md?: GridColumnWidth;
  lg?: GridColumnWidth;
  xl?: GridColumnWidth;
}

export const Col: React.FC<ColProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  children,
  ...rest
}) => {
  const colOnly = !xs && !sm && !md && !lg && !xl;
  const className = cn(
    componentStyles['col-base'],
    colOnly && componentStyles.col,
    xs && componentStyles[`col-${xs}`],
    sm && componentStyles[`col-sm-${sm}`],
    md && componentStyles[`col-md-${md}`],
    lg && componentStyles[`col-lg-${lg}`],
    xl && componentStyles[`col-xl-${xl}`]
  );

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

const Grid: React.FC<GridProps> = ({ fluid = false, children, ...rest }) => {
  return (
    <Container fluid={fluid} className={componentStyles.container} {...rest}>
      <div className={componentStyles.row}>{children}</div>
    </Container>
  );
};

export default Grid;
