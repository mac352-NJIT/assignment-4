import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppRoot } from "./app-root";
import { routes } from "./app.routes";

bootstrapApplication(AppRoot, {
  providers: [provideRouter(routes)],
});