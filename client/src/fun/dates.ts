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
  } else if (stamp.getHours() <= 17 && stamp.getMinutes() < 30) {
    const newMin = stamp.getMinutes() >= 30 ? 0 : 30;
    const newHour = newMin === 0 ? stamp.getHours() + 1 : stamp.getHours();

    return copyWithReplace(stamp, { hour: newHour, min: newMin });
  } else {
    return copyWithReplace(stamp, {
      date: stamp.getDate() + 1,
      hour: 9,
      min: 0,
    });
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

const forWeek = (now: Date) => {
  const firstAvailable = first(now);

  let firstAvailableByDays = [
    copyWithReplace(firstAvailable, {
      hour: firstAvailable.getHours(),
      min: firstAvailable.getMinutes() - 1,
    }),
    ...Array.from({ length: 6 }, (_, idx) =>
      copyWithReplace(firstAvailable, {
        hour: 8,
        min: 0,
        date: firstAvailable.getDate() + idx + 1,
      })
    ),
  ];

  return [].concat.apply(
    [],
    firstAvailableByDays.map((d) =>
      forDay([first(d)])
        .reverse()
        .map((t) => format(t))
    )
  );
};

const forRegister = (): string[] => forWeek(new Date());

const forSchedule = (): string[] => [
  ...new Set(forRegister().map((d: string) => d.split(",")[0])),
];

export const Dates = { forRegister, forSchedule };
