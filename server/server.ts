import { default as application } from "./src/app";
import { ConfigParser } from "./configParser";

const config = ConfigParser.call();

application.listen(config.port, () => {
  console.log(`App is listening on http://${config.host}:${config.port}!`);
});