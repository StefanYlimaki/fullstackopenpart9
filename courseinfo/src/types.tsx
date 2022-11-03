interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseWithDescriptionPart extends CoursePartBase {
    description: string;
}

interface CourseNormalPart extends CourseWithDescriptionPart {
  type: 'normal';
}

interface CourseProjectPart extends CoursePartBase {
  type: 'groupProject';
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CourseWithDescriptionPart {
  type: 'submission';
  exerciseSubmissionLink: string;
}

interface CourseWithRequirements extends CourseWithDescriptionPart {
  requirements: ['nodejs', 'jest'],
  type: 'special'
}

export type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseWithRequirements;
