+++
title = 'CATS'
date = 2025-08-29
draft = false
+++
<div class="technologies">
	<a title="Python"><img src="/technologies-logos/python.png"></a>
    <a title="Pytest"><img src="/technologies-logos/pytest.png"></a>
    <a title="Docker"><img src="/technologies-logos/docker.png"></a>
    <a title="GitLab CI"><img src="/technologies-logos/gitlab.png"></a>
</div>

## TL;DR
CATS is an integration testing suite that extends Pytest with custom protocols for communicating with and controlling a
particular model of MAS radio. Its primary goal is to reduce the risk of firmware regressions inherent to the radio’s 
rolling-release model; furthermore, CATS aims to enforce more thorough testing as part of our software process through 
the use of GitLab CI pipelines, which ensure that merge requests are validated before allowing them to be accepted. 
Before CATS’s implementation, many integration tests were performed manually once a new release candidate was ready to
be validated. In addition to being time-consuming, this method only tested the radio’s firmware when making new 
releases, giving regressions the opportunity to emerge between releases without an efficient way to identify their 
origin. Although rollout progressed more slowly than expected, CATS has proven to be a useful tool in practice. It has 
reduced the per-release firmware validation time by more than an hour and has been used to validate several firmware 
versions. As my first major project during my internship, CATS provided much experience in the realm of test automation,
CI pipeline development, embedded systems, and working to improving our team’s overall software process. 

---

## Background
When I arrived at MAS, testing radio firmware relied heavily on BTS, an existing tool that required engineers to 
manually run tests and monitor results. While BTS provided some assistance in the testing process, its workflow 
still demanded a lot of human involvement, and the radio’s codebase would only get validated when a release candidate 
was ready. 

> A screenshot of the BTS testing software.
<br></br>
<img src="/trolley.jpeg" style="max-width: 600px">

With bugs and regressions accumulating in the radio’s firmware, it became clear both the testing software and process 
involved in validating new releases needed improvement. The solution devised by the engineers at MAS was to make a new 
integration testing suite to automate firmware validation, with the added benefit of enabling these tests to be run 
automatically as part of merge requests through GitLab CI. My role was to get such software into a finished and deployed
 state, and that is what I set out to do with CATS.

---

## Functionality
CATS is an integration testing suite built on Pytest that implements the following functionality:

### Communication with the Radio
CATS can communicate with the radios over IPC, IP, and serial connections. Custom protocols allow sending and receiving
 messages, storing them for later analysis, and automatically asserting test success or failure depending on whether 
 expected messages are received.

### Automatic Assertions
Users specify output the radio is expected to respond with after an action is performed, along with a timeout interval; 
if the expected output does not appear, CATS automatically fails the test and continues to the next one. 

<img src="/media/mas/cats/auto-assertions-log.png">

By avoiding assert statements when possible, CATS reduces code, saves development time, adheres to DRY principles, and 
minimizes potential errors.

> Code snippets showing example test code both without (top) and with automatic assertions (bottom); take note of how 
> much the automatic assertions have simplified the code.
<br></br>
<img src="/media/mas/cats/code-snip-no-auto-assert.png">
<img src="/media/mas/cats/code-snip-with-auto-assert.png">

### Customizable Logging
CATS leverages Python’s `logging` module, as well as Pytest’s logging capabilities to produce detailed logs. Output can 
be customized in the CLI using custom arguments, and log files that capture all log messages are automatically 
generated, including those not shown in the CLI. 

> A screenshot showing CATS's log output in its most condensed form:
<br></br>
<img src="/media/mas/cats/condensed-log-output.png">

> CATS's CLI arguments for changing logging options.
<br></br>
<img src="/media/mas/cats/logging-log-cli-level-arg.png">
<img src="/media/mas/cats/logging-log-file-arg.png">

### Test Filtering and Organization
Using Pytest markers, CATS organizes and filters tests efficiently. Markers can be added to tests via decorators, and 
the available set of markers can be customized using the `pytest.ini` file. This feature allows developers to only run a
subset of tests and categorize the functionality of tests, maintaining a clean test structure.

> Code snippet showing markers being applied to a test function.
<br></br>
<img src="/media/mas/cats/applying-markers-to-test-func.png">

> Marker definitions in `pytest.ini`.
<br></br>
<img src="/media/mas/cats/markers-pytest-ini.png">

### Radio Firmware Updates
CATS can perform firmware upgrades on a radio if a firmware update file is provided. During the procedure, all radio 
output is captured and logged, especially firmware update status messages. 

### Simplified Distribution via Docker
CATS is distributed as a Docker image containing Python and radio firmware libraries; this is done to simplify 
deployment across environments and ensure consistency between running CATS via the GitLab CI pipeline and running it 
locally on development machines. The benefits over choosing Docker instead of something like PyInstaller are detailed 
more in [this section of the post](#test-driven-development).

---

## Impacts of this Software
[intro]

### Test-Driven Development
CATS’s biggest strength is enabling developers to adopt test-driven development practices for radio firmware. Using 
Docker, developers can run CATS locally on their development machines, mounting their local version of the radio 
firmware codebase at runtime; this allows tests to be written and executed on a separate branch without needing to 
repackage CATS for every change, providing fast and iterative feedback that assists in ensuring new features behave 
correctly from the start. 

### Protecting the `master` Branch
By integrating CATS into GitLab CI pipelines, the `master` branch of the radio firmware codebase is protected from 
untested or faulty code. Merge requests cannot be accepted until new code is validated with CATS, meaning any changes 
that cause existing tests to fail must be investigated and resolved before merging. This enforces testing as an integral 
part of the firmware development workflow, reducing time spent debugging regressions later. 

### Catching Regressions Early
CATS also runs a nightly pipeline that executes the most up-to-date firmware against a comprehensive test suite; these 
tests are more extensive than those required for merge requests, requiring several hours to complete. Running these 
slower, more complex tests only during the nightly pipeline run balances rapid feedback for developers during active 
development while still catching regressions early enough that they don’t escalate into larger problems. 

---

## Retrospective
Overall, I’d say CATS has been a useful tool for automating the process of radio firmware validation and promoting 
test-driven development practices within the team. Although the rollout of merge request pipelines has progressed more 
slowly than I initially hoped, developers are gradually incorporating CATS into their daily workflows, and the system 
has already uncovered several firmware bugs that have led to fixes. As my first major project done in a professional 
setting, I gained hands-on experience not only in test automation, setting up CI pipelines, and the process of producing 
embedded software, but also in the soft skills necessary to deliver a new software project that meets developer needs 
and guide a team of software engineers into adopting it. I am looking forward to seeing what else I can learn and 
accomplish during my time at MAS.