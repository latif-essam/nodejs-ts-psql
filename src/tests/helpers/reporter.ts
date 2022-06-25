import {
  DisplayProcessor,
  StacktraceOption,
  SpecReporter,
} from "jasmine-spec-reporter";

import SuiteInfo = jasmine.JasmineStartedInfo;

class CustomProcessors extends DisplayProcessor {
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
    suite: { displayNumber: true },
    customProcessors: [CustomProcessors],
  })
);
