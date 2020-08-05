interface DateParameters {
  year?: number;
  month?: number;
  date?: number;
  hour?: number;
  min?: number;
}

const copyWithReplace = (stamp: Date, params: DateParameters): Date =>
  new Date(
    params.year !== undefined ? params.year : stamp.getFullYear(),
    params.month !== undefined ? params.month : stamp.getMonth(),
    params.date !== undefined ? params.date : stamp.getDate(),
    params.hour !== undefined ? params.hour : stamp.getHours(),
    params.min !== undefined ? params.min : stamp.getMinutes()
  );

const first = (stamp: Date): Date => {
  if (stamp.getHours() < 9) {
    return copyWithReplace(stamp, { hour: 9, min: 0 });
  } else {
    const newMin = stamp.getMinutes() >= 30 ? 0 : 30;
    const newHour = newMin === 0 ? stamp.getHours() + 1 : stamp.getHours();

    return copyWithReplace(stamp, { hour: newHour, min: newMin });
  }
};

const formatterOptions = () => ({
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZone: "Europe/Moscow",
});

const format = (stamp: Date): string =>
  Intl.DateTimeFormat("ru", formatterOptions()).format(stamp);

const forDay = (stamps: Date[], intervalMin: number = 30): Date[] => {
  const left = stamps[0];
  const next = new Date();
  next.setTime(left.getTime() + intervalMin * 60000);

  return next.getHours() > 17 ? stamps : forDay([next, ...stamps]);
};

const call = () =>
  forDay([first(new Date())])
    .reverse()
    .map((t) => format(t));

export const Dates = { call };
