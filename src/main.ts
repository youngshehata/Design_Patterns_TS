import { ActiveUsersDetailsObserver } from "./Observer/ActiveUsersDetailsObserver";
import { ActiveUsersObserver } from "./Observer/ActiveUsersObserver";
import { AuthPublisher } from "./Observer/AuthPublisher";

const authPublisher = new AuthPublisher();
authPublisher.subscribe(new ActiveUsersObserver(authPublisher));
authPublisher.subscribe(new ActiveUsersDetailsObserver(authPublisher));
authPublisher.setValue(["shehata", "omar", "mohamed"]);
authPublisher.setValue(["shehata", "omar", "mohamed", "Laila"]);
