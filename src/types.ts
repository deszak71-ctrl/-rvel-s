export type AppMode = 'writing_studio' | 'argumentation' | 'babits_literature';

export type LessonTab = 'warmup' | 'bio' | 'poem' | 'practice' | 'quiz';

export type ArgumentationTab =
  | 'intro'
  | 'tip_model'
  | 'pro_contra'
  | 'personal_opinion'
  | 'conclusion'
  | 'workshop'
  | 'quiz';

export type WritingStudioTab = 'topics' | 'studio' | 'duel' | 'guide';

export interface StanzaData {
  id: number;
  country: string;
  countryAdjective: string;
  lines: string[];
  vocabulary: { word: string; meaning: string }[];
  sensoryDominance: 'látás' | 'hallás' | 'tapintás/hő' | 'térérzet';
  sensoryDescription: string;
  keywords: string[];
  postcardImageAlt: string;
  colorTheme: string;
  badgeBg: string;
  description: string;
}

export interface BioFact {
  id: string;
  period: string;
  title: string;
  summary: string;
  detail: string;
  keyConcepts: string[];
}

export interface MatchingItem {
  id: string;
  country: string;
  motifs: string;
  explanation: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint: string;
}

// Argumentation specific types
export interface ArgumentTopic {
  id: string;
  title: string;
  dilemma: string;
  category: 'iskola' | 'technológia' | 'irodalom' | 'társadalom';
  context: string;
  proArguments: { thesis: string; reasoning: string; example: string }[];
  contraArguments: { thesis: string; reasoning: string; example: string }[];
}

export interface IntroExample {
  id: string;
  type: 'weak' | 'aggressive' | 'ideal';
  title: string;
  text: string;
  critique: string;
  score: number;
}

export interface TIPArgumentPuzzle {
  id: string;
  topic: string;
  theses: string[];
  reasonings: string[];
  examples: string[];
  correctCombination: { thesisIndex: number; reasoningIndex: number; exampleIndex: number };
  explanation: string;
}

export interface FallacyCard {
  id: string;
  name: string;
  example: string;
  whyWrong: string;
  howToFix: string;
}

export interface StyleTransformTask {
  id: string;
  original: string;
  flaw: string;
  options: { text: string; isBest: boolean; feedback: string }[];
}
