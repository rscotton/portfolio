// Source: https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
export const slugify = (sourceStr: string) => {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return sourceStr
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

// Source: https://vanillajstoolkit.com/helpers/serialize/
export const serialize = (form: HTMLFormElement) => {
  // Setup our serialized data
  const serialized = [];

  // Loop through each field in the form
  for (const field of form.elements) {
    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (
      !(field as HTMLFormElement).name ||
      (field as HTMLFormElement).disabled ||
      (field as HTMLFormElement).type === 'file' ||
      (field as HTMLFormElement).type === 'reset' ||
      (field as HTMLFormElement).type === 'submit' ||
      (field as HTMLFormElement).type === 'button'
    ) {
      continue;
    }

    // If a multi-select, get all selections
    if ((field as HTMLFormElement).type === 'select-multiple') {
      for (const option of (field as HTMLFormElement).options) {
        if (!option.selected) {
          continue;
        }
        serialized.push(
          `${encodeURIComponent(
            (field as HTMLFormElement).name
          )}=${encodeURIComponent(option.value)}`
        );
      }
    } else if (
      // Convert field data to a query string
      ((field as HTMLFormElement).type !== 'checkbox' &&
        (field as HTMLFormElement).type !== 'radio') ||
      (field as HTMLFormElement).checked
    ) {
      serialized.push(
        encodeURIComponent((field as HTMLFormElement).name) +
          '=' +
          encodeURIComponent((field as HTMLFormElement).value)
      );
    }
  }

  return serialized.join('&');
};
