import {
  isString
} from './helper';

/**
 * log type
 */
const COLORS = {
  primary: 'blue',
  success: 'green',
  info: 'cyan',
  warning: 'yellow',
  danger: 'red'
};

/**
 * BalmJS log
 */
BalmJS.log = (title, content, type = 'default') => {
  if (config.debug) {
    title = type === 'default' ?
      title :
      $.util.colors[COLORS[type]](title);

    content = isString(content) ?
      content :
      JSON.stringify(content, null, 4);

    $.util.log(title + ':\n%s\n', content);
  }
};