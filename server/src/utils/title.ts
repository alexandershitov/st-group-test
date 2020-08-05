const call = (req) =>
  `ST-GROUP ${req.originalUrl === "/schedule" ? "Schedule" : "Register"}`;

export const Title = { call };
