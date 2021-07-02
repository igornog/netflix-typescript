import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import './button.scss';

const styles = {
  root: {
    background: '#e50914',
    lineHeight: 'normal',
    padding: '7px 17px',
    fontWeight: '400',
    textTransform: 'capitalize',
    color: 'white',
    borderRadius: '4px'
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button type="submit" className={clsx(classes.root, className)} {...other}>
      {children || 'class names'}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
