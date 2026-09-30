import type { UrgencyLevel } from "@/lib/data/requestOptions";

export type RequestFormState = {
  fullName: string;
  email: string;
  phone: string;
  legalDomainSlug: string;
  opposingPartyName: string;
  opposingPartyDetails: string;
  urgency: UrgencyLevel;
  description: string;
  documents: File[];
  consent: boolean;
};

export const initialRequestFormState: RequestFormState = {
  fullName: "",
  email: "",
  phone: "",
  legalDomainSlug: "",
  opposingPartyName: "",
  opposingPartyDetails: "",
  urgency: "normal",
  description: "",
  documents: [],
  consent: false,
};

export type StepProps = {
  state: RequestFormState;
  update: <K extends keyof RequestFormState>(key: K, value: RequestFormState[K]) => void;
};
