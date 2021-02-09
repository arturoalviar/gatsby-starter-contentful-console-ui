export const tileBeforeStyles = theme => ({
  base: {
    content: '""',
    display: 'block',
    borderRadius: '.1rem',
    boxShadow: `0 0 8px 8px ${theme.colors.primary['400']}`,
    position: 'absolute',
    width: 'calc(100% + 8px)',
    height: 'calc(100% + 8px)',
    top: '-4px',
    left: '-4px',
    right: '0',
    bottom: '0',
    opacity: '0',
    transform: 'opacity .2s ease',
  },
  md: {
    boxShadow: `0 0 14px 10px ${theme.colors.primary['400']}`,
    width: 'calc(100% + 14px)',
    height: 'calc(100% + 14px)',
    top: '-7px',
    left: '-7px',
  },
})

export const tileBeforeActiveStyles = {
  _before: {
    opacity: '1',
  },
}

export default {
  tileBeforeStyles,
  tileBeforeActiveStyles,
}
