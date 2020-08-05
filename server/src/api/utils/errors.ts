const combine = (errors) => {
  const combined = {};

  errors.map((e) => {
    const param = e.param;

    if (combined.hasOwnProperty(param)) {
      combined[param].push(e.msg);
    } else {
      combined[param] = [e.msg];
    }
  });

  return combined;
};

export const Errors = { combine };
