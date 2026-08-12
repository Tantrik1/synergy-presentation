import { PresentationController } from "@/components/PresentationController";

// Section 1
import { Slide01_Cover } from "@/components/slides/Slide01_Cover";
import { Slide02_Agenda } from "@/components/slides/Slide02_Agenda";
import { Slide03_SituationIntro } from "@/components/slides/Slide03_SituationIntro";
import { Slide04_Diagnosis } from "@/components/slides/Slide04_Diagnosis";

// Section 2
import { Slide07_EngineIntro } from "@/components/slides/Slide07_EngineIntro";
import { Slide08_SixPillarsOverview } from "@/components/slides/Slide08_SixPillarsOverview";
import { Slide09_Pillar1_SEO } from "@/components/slides/Slide09_Pillar1_SEO";
import { Slide10_Pillar1B_AEO } from "@/components/slides/Slide10_Pillar1B_AEO";
import { Slide11_Pillar2_LinkedIn } from "@/components/slides/Slide11_Pillar2_LinkedIn";
import { Slide12_Pillar3_B2BEmail } from "@/components/slides/Slide12_Pillar3_B2BEmail";
import { Slide14_Pillar4_Video } from "@/components/slides/Slide14_Pillar4_Video";
import { Slide15_SignatureAsset_BrandFilm } from "@/components/slides/Slide15_SignatureAsset_BrandFilm";
import { Slide16_Pillar5_Reviews } from "@/components/slides/Slide16_Pillar5_Reviews";
import { Slide17_Pillar6_PaidSocial } from "@/components/slides/Slide17_Pillar6_PaidSocial";

// Section 3
import { Slide18_LeadDelivery } from "@/components/slides/Slide18_LeadDelivery";
import { Slide20_Roadmap } from "@/components/slides/Slide20_Roadmap";
import { Slide21_Deliverables } from "@/components/slides/Slide21_Deliverables";
import { Slide22_Measurement } from "@/components/slides/Slide22_Measurement";

// Section 4
import { Slide24_Phase1_Setup } from "@/components/slides/Slide24_Phase1_Setup";
import { Slide25_Phase2_Retainer } from "@/components/slides/Slide25_Phase2_Retainer";
import { Slide26_Phase3_AddOns } from "@/components/slides/Slide26_Phase3_AddOns";
import { Slide27_Commercials } from "@/components/slides/Slide27_Commercials";
import { Slide28_WhyMarketrix } from "@/components/slides/Slide28_WhyMarketrix";
import { Slide29_NextSteps } from "@/components/slides/Slide29_NextSteps";
import { Slide30_ThankYou } from "@/components/slides/Slide30_ThankYou";


export default function Home() {
  return (
    <main className="w-full h-full bg-navy-900 overflow-hidden">
      <PresentationController>
        <Slide01_Cover />
        <Slide02_Agenda />
        <Slide03_SituationIntro />
        <Slide04_Diagnosis />
        <Slide07_EngineIntro />
        <Slide08_SixPillarsOverview />
        <Slide09_Pillar1_SEO />
        <Slide10_Pillar1B_AEO />
        <Slide11_Pillar2_LinkedIn />
        <Slide12_Pillar3_B2BEmail />
        <Slide14_Pillar4_Video />
        <Slide15_SignatureAsset_BrandFilm />
        <Slide16_Pillar5_Reviews />
        <Slide17_Pillar6_PaidSocial />
        <Slide18_LeadDelivery />
        <Slide20_Roadmap />
        <Slide21_Deliverables />
        <Slide22_Measurement />
        <Slide24_Phase1_Setup />
        <Slide25_Phase2_Retainer />
        <Slide26_Phase3_AddOns />
        <Slide27_Commercials />
        <Slide28_WhyMarketrix />
        <Slide29_NextSteps />
        <Slide30_ThankYou />
      </PresentationController>
    </main>
  );
}
