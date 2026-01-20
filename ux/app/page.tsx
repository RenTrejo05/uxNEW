"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Tab, Tabs } from "@heroui/tabs";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";

import { subtitle, title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col gap-12 py-8 md:py-14">
      <div className="grid gap-8 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-3 space-y-4">
          <div className="flex flex-wrap gap-2">
            <Chip color="primary" variant="flat">
              Interactive systems
            </Chip>
            <Chip color="secondary" variant="flat">
              Usability | Accessibility | UX
            </Chip>
          </div>
          <div className="leading-tight">
            <span className={title({ size: "lg" })}>Comprehensive analysis of HCI</span>
            <br />
            <span className={title({ color: "violet", size: "lg" })}>
              Theory, practice, and the user experience paradigm
            </span>
          </div>
          <p className={subtitle({ class: "max-w-3xl" })}>
            From ISO 9241-11 to Nielsen heuristics and WCAG 2.1, this page distills how to craft effective,
            inclusive, and emotionally resonant products.
          </p>
        </div>
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-col items-start gap-1">
            <p className="text-sm text-default-500">Usability triad (ISO 9241-11)</p>
            <p className="text-xl font-semibold">Effectiveness, efficiency, satisfaction</p>
          </CardHeader>
          <CardBody className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div>
              <p className="text-sm text-default-500">Effectiveness</p>
              <p className="text-xl font-semibold">Accuracy + completeness</p>
              <p className="text-sm text-default-500">Goals achieved without detours.</p>
            </div>
            <Divider className="sm:hidden" />
            <div>
              <p className="text-sm text-default-500">Efficiency</p>
              <p className="text-xl font-semibold">Resources vs. outcome</p>
              <p className="text-sm text-default-500">Time, effort, and cognitive cost.</p>
            </div>
            <Divider className="sm:hidden" />
            <div>
              <p className="text-sm text-default-500">Satisfaction</p>
              <p className="text-xl font-semibold">Comfort + attitude</p>
              <p className="text-sm text-default-500">Confidence and sustainable delight.</p>
            </div>
          </CardBody>
          <CardFooter className="flex flex-wrap gap-2">
            <Chip size="sm" variant="flat">
              Fast learning
            </Chip>
            <Chip size="sm" variant="flat" color="success">
              Low error rate
            </Chip>
            <Chip size="sm" variant="flat" color="warning">
              Memorability after a break
            </Chip>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-2">
          <p className="text-sm text-default-500">Foundations</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold">Usability, accessibility, and UX</p>
            <Chip variant="flat" color="success">
              Inclusion = quality
            </Chip>
          </div>
          <p className="text-sm text-default-500">
            Usability explains how the task succeeds; accessibility ensures who can use it; UX captures how the entire journey feels.
          </p>
        </CardHeader>
        <CardBody>
          <Tabs
            aria-label="Foundations tabs"
            fullWidth
            color="primary"
            radius="lg"
            variant="bordered"
            items={[
              {
                key: "usability",
                title: "Usability (ISO 9241-11)",
                content: (
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-2">
                      <p className="text-default-600">
                        A relational quality among user, context, and goal. Measured through accuracy, resources spent, and satisfaction.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Chip>Learnability</Chip>
                        <Chip>Efficiency</Chip>
                        <Chip>Error severity</Chip>
                        <Chip>Subjective satisfaction</Chip>
                      </div>
                    </div>
                    <Card className="bg-default-50 border border-default-200">
                      <CardBody className="space-y-2">
                        <p className="text-sm text-default-500">Quick checks</p>
                        <ul className="list-disc pl-4 space-y-1 text-sm text-default-600">
                          <li>Time to competence (learnability).</li>
                          <li>Task time and required steps.</li>
                          <li>Error rate and severity.</li>
                          <li>SUS or Likert for perceived ease.</li>
                        </ul>
                      </CardBody>
                    </Card>
                  </div>
                ),
              },
              {
                key: "accessibility",
                title: "Accessibility (WCAG 2.1)",
                content: (
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-2">
                      <p className="text-default-600">
                        Inclusion guided by POUR: Perceivable, Operable, Understandable, Robust.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Chip color="primary">Alt text</Chip>
                        <Chip color="primary">Keyboard access</Chip>
                        <Chip color="primary">Plain language</Chip>
                        <Chip color="primary">Assistive tech support</Chip>
                      </div>
                    </div>
                    <Card className="bg-default-50 border border-default-200">
                      <CardBody className="space-y-2">
                        <p className="text-sm text-default-500">Legal + ethical</p>
                        <ul className="list-disc pl-4 space-y-1 text-sm text-default-600">
                          <li>ADA and EAA target WCAG 2.1 AA.</li>
                          <li>Accessibility boosts reputation and reach.</li>
                          <li>AT features help everyone (e.g., high contrast in sunlight).</li>
                        </ul>
                      </CardBody>
                    </Card>
                  </div>
                ),
              },
              {
                key: "ux",
                title: "User experience (UX)",
                content: (
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-2">
                      <p className="text-default-600">
                        The emotional and functional journey from first touch to support. Don Norman: every interaction with the company counts.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Chip color="secondary">Cognitive load</Chip>
                        <Chip color="secondary">Progressive disclosure</Chip>
                        <Chip color="secondary">Gulf of Execution</Chip>
                        <Chip color="secondary">Gulf of Evaluation</Chip>
                      </div>
                    </div>
                    <Card className="bg-default-50 border border-default-200">
                      <CardBody className="space-y-2">
                        <p className="text-sm text-default-500">HCD cycle (ISO 9241-210)</p>
                        <ol className="list-decimal pl-4 space-y-1 text-sm text-default-600">
                          <li>Understand context and people.</li>
                          <li>Specify user requirements.</li>
                          <li>Design and prototype solutions.</li>
                          <li>Evaluate with real users, iteratively.</li>
                        </ol>
                      </CardBody>
                    </Card>
                  </div>
                ),
              },
            ]}
          >
            {(item) => (
              <Tab key={item.key} title={item.title}>
                {item.content}
              </Tab>
            )}
          </Tabs>
        </CardBody>
      </Card>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-col gap-1">
            <p className="text-sm text-default-500">Nielsen heuristics</p>
            <p className="text-xl font-semibold">Rules of thumb without a lab</p>
          </CardHeader>
          <CardBody>
            <Table aria-label="Nielsen heuristics">
              <TableHeader>
                <TableColumn>Heuristic</TableColumn>
                <TableColumn>Benefit</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="status">
                  <TableCell>Visibility of system status</TableCell>
                  <TableCell className="text-default-600">Continuous feedback lowers anxiety and repeated actions.</TableCell>
                </TableRow>
                <TableRow key="freedom">
                  <TableCell>User control and freedom</TableCell>
                  <TableCell className="text-default-600">Undo and cancel act as escape hatches for mistakes.</TableCell>
                </TableRow>
                <TableRow key="recognition">
                  <TableCell>Recognition over recall</TableCell>
                  <TableCell className="text-default-600">Visible menus and suggestions reduce memory load.</TableCell>
                </TableRow>
                <TableRow key="prevention">
                  <TableCell>Error prevention</TableCell>
                  <TableCell className="text-default-600">Remove error-prone states before they reach users.</TableCell>
                </TableRow>
                <TableRow key="aesthetic">
                  <TableCell>Aesthetic and minimalist design</TableCell>
                  <TableCell className="text-default-600">Clean interfaces keep focus on the primary task.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardBody>
        </Card>

        <Card className="bg-primary-50 border border-primary-100">
          <CardHeader className="flex flex-col gap-1">
            <p className="text-sm text-primary-500">UI vs UX</p>
            <p className="text-lg font-semibold text-primary-600">The surface versus the whole journey.</p>
          </CardHeader>
          <CardBody className="space-y-3">
            <div className="rounded-lg border border-primary-100 bg-white/50 p-3">
              <p className="text-xs uppercase tracking-wide text-primary-500">Medium</p>
              <div className="mt-1 grid grid-cols-1 gap-2 text-sm text-default-700">
                <p>
                  <span className="font-semibold">UI: </span>Digital visuals and controls.
                </p>
                <p>
                  <span className="font-semibold">UX: </span>On-screen and off-screen touchpoints (support, performance, policy).
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-primary-100 bg-white/50 p-3">
              <p className="text-xs uppercase tracking-wide text-primary-500">Focus</p>
              <div className="mt-1 grid grid-cols-1 gap-2 text-sm text-default-700">
                <p>
                  <span className="font-semibold">UI: </span>Visual appeal and micro-interactions.
                </p>
                <p>
                  <span className="font-semibold">UX: </span>Goal completion, emotion, and reliability.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-primary-100 bg-white/50 p-3">
              <p className="text-xs uppercase tracking-wide text-primary-500">Outcome</p>
              <div className="mt-1 grid grid-cols-1 gap-2 text-sm text-default-700">
                <p>
                  <span className="font-semibold">UI: </span>Coherent styling and brand.
                </p>
                <p>
                  <span className="font-semibold">UX: </span>Problems solved efficiently with empathy.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-primary-100 bg-white/50 p-3">
              <p className="text-xs uppercase tracking-wide text-primary-500">Deliverables</p>
              <div className="mt-1 grid grid-cols-1 gap-2 text-sm text-default-700">
                <p>
                  <span className="font-semibold">UI: </span>Mockups, design systems, iconography.
                </p>
                <p>
                  <span className="font-semibold">UX: </span>Personas, journey maps, user stories.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-1">
          <p className="text-sm text-default-500">Comparative cases</p>
          <p className="text-xl font-semibold">Who excels and who struggles</p>
        </CardHeader>
        <CardBody>
          <Table aria-label="Product cases">
            <TableHeader>
              <TableColumn>Product</TableColumn>
              <TableColumn>Strengths</TableColumn>
              <TableColumn>Gaps</TableColumn>
              <TableColumn>HCI insight</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="google">
                <TableCell className="font-semibold">Google Search</TableCell>
                <TableCell className="text-default-600">Minimalist focus and strong AT support.</TableCell>
                <TableCell className="text-default-600">N/A</TableCell>
                <TableCell className="text-default-600">Minimalism aids cognitive accessibility.</TableCell>
              </TableRow>
              <TableRow key="amazon">
                <TableCell className="font-semibold">Amazon</TableCell>
                <TableCell className="text-default-600">High efficiency for experts (one-click).</TableCell>
                <TableCell className="text-default-600">Keyboard barriers in filters.</TableCell>
                <TableCell className="text-default-600">Complexity can hide accessibility debt.</TableCell>
              </TableRow>
              <TableRow key="ryanair">
                <TableCell className="font-semibold">RyanAir</TableCell>
                <TableCell className="text-default-600">None notable.</TableCell>
                <TableCell className="text-default-600">Dark patterns in insurance selection.</TableCell>
                <TableCell className="text-default-600">Ethics matter: prevent errors instead of exploiting them.</TableCell>
              </TableRow>
              <TableRow key="zoom">
                <TableCell className="font-semibold">Zoom</TableCell>
                <TableCell className="text-default-600">Join via a single link.</TableCell>
                <TableCell className="text-default-600">—</TableCell>
                <TableCell className="text-default-600">Reducing the execution gulf boosts inclusion.</TableCell>
              </TableRow>
              <TableRow key="ios">
                <TableCell className="font-semibold">Apple iOS</TableCell>
                <TableCell className="text-default-600">System-wide VoiceOver and gesture consistency.</TableCell>
                <TableCell className="text-default-600">—</TableCell>
                <TableCell className="text-default-600">Native accessibility multiplies general usability.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
        <CardFooter className="flex flex-wrap gap-2 text-sm text-default-500">
          <Chip size="sm" variant="flat" color="success">
            Minimalism supports cognition
          </Chip>
          <Chip size="sm" variant="flat" color="warning">
            Keyboard traps = task failure
          </Chip>
          <Chip size="sm" variant="flat" color="danger">
            Dark patterns erode trust
          </Chip>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-col gap-1">
          <p className="text-sm text-default-500">Evaluation methods</p>
          <p className="text-xl font-semibold">When to use each technique</p>
        </CardHeader>
        <CardBody>
          <Table aria-label="Evaluation methods">
            <TableHeader>
              <TableColumn>Method</TableColumn>
              <TableColumn>Type</TableColumn>
              <TableColumn>Best for</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="heuristic">
                <TableCell className="font-semibold">Heuristic evaluation</TableCell>
                <TableCell className="text-default-600">Inspection</TableCell>
                <TableCell className="text-default-600">Early principle violations without a lab.</TableCell>
              </TableRow>
              <TableRow key="usabilitytests">
                <TableCell className="font-semibold">Usability testing</TableCell>
                <TableCell className="text-default-600">Empirical</TableCell>
                <TableCell className="text-default-600">Task time, completion, and error rates with users.</TableCell>
              </TableRow>
              <TableRow key="cardsorting">
                <TableCell className="font-semibold">Card sorting</TableCell>
                <TableCell className="text-default-600">Inquiry</TableCell>
                <TableCell className="text-default-600">Navigation that fits user mental models.</TableCell>
              </TableRow>
              <TableRow key="sessionreplay">
                <TableCell className="font-semibold">Session replay</TableCell>
                <TableCell className="text-default-600">Observation</TableCell>
                <TableCell className="text-default-600">Friction in the wild (U-turns, abandons).</TableCell>
              </TableRow>
              <TableRow key="a11yaudit">
                <TableCell className="font-semibold">Accessibility audit</TableCell>
                <TableCell className="text-default-600">Technical</TableCell>
                <TableCell className="text-default-600">WCAG 2.1 AA compliance and inclusion.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
        <CardFooter className="text-sm text-default-500">
          Combine inspection, empirical evidence, mental-model alignment, live observation, and compliance to close execution and evaluation gaps.
        </CardFooter>
      </Card>
    </section>
  );
}
