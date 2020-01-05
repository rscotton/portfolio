import React from 'react';
import cn from 'classnames';
import Container from '@components/Container';
import componentStyles from './styles.module.scss';

type GridColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GridColumnOffset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: GridColumnWidth;
  sm?: GridColumnWidth;
  md?: GridColumnWidth;
  lg?: GridColumnWidth;
  xl?: GridColumnWidth;
  xsOffset?: GridColumnOffset;
  smOffset?: GridColumnOffset;
  mdOffset?: GridColumnOffset;
  lgOffset?: GridColumnOffset;
  xlOffset?: GridColumnOffset;
}

export const Col: React.FC<ColProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
  children,
  ...rest
}) => {
  const colOnly = !xs && !sm && !md && !lg && !xl;
  const colClasses = cn(
    componentStyles['col-base'],
    colOnly && componentStyles.col,
    xs && componentStyles[`col-${xs}`],
    sm && componentStyles[`col-sm-${sm}`],
    md && componentStyles[`col-md-${md}`],
    lg && componentStyles[`col-lg-${lg}`],
    xl && componentStyles[`col-xl-${xl}`],
    typeof xsOffset !== undefined && componentStyles[`offset-${xsOffset}`],
    typeof smOffset !== undefined && componentStyles[`offset-sm-${smOffset}`],
    typeof mdOffset !== undefined && componentStyles[`offset-md-${mdOffset}`],
    typeof lgOffset !== undefined && componentStyles[`offset-lg-${lgOffset}`],
    typeof xlOffset !== undefined && componentStyles[`offset-xl-${xlOffset}`]
  );

  return (
    <div className={colClasses} {...rest}>
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
