// Editable research-story content. Keep unreported results out of public text.
window.RESEARCH_STORY = {
  carbonStages: [
    {label: '01 · Partial hydrolysis', title: 'Starch becomes a mixture of sugar chains.', text: 'Microwaves and an acetic acid catalyst partially break down potato starch. The mild hydrolysates contain oligosaccharides, including chains beyond the measured G2–G8 range, and little free glucose.', cue: 'Potato starch → oligosaccharide-rich hydrolysate', evidence: 'Study 01 · hydrolysate profiling, Fig. 2'},
    {label: '02 · Extracellular breakdown', title: 'The sugar chains are broken down outside the cells.', text: 'Sugar profiles changed in cell-free culture supernatant. Together with transcriptomic and extracellular proteomic evidence, this supports extracellular saccharification and points to a secreted GH15 glucoamylase as a candidate contributor.', cue: 'Oligosaccharides → smaller sugars and glucose', evidence: 'Study 01 · Section 3.3, Fig. 4 and Fig. S5'},
    {label: '03 · Carbon utilization', title: 'Released glucose can support algal metabolism.', text: 'The proposed pathway supplies glucose that the microalga can transport and metabolize. Oligosaccharides therefore function as a reservoir rather than having to enter cells intact.', cue: 'Released glucose → cellular metabolism → algal biomass', evidence: 'Study 01 · growth experiments, Fig. 3'}
  ],
  evidence: [
    {label: 'Growth & sugars', title: 'Growth with very little free glucose', observation: 'Mild starch hydrolysates supported algal growth despite initial glucose below 0.05 g/L. Experiments with defined G4 and G6 substrates further supported utilization of longer sugar chains.', meaning: 'The initial free glucose alone cannot explain the observed growth; the larger sugar pool matters.', limit: 'Comparable growth does not mean identical biomass yield per unit substrate. The paper reports different substrate yields across conditions.', source: 'Fig. 3; Section 3.2–3.3; Fig. S6'},
    {label: 'Cell-free supernatant', title: 'Sugar conversion continues without living cells', observation: 'Culture supernatant changed the sugar profile of fresh hydrolysate after cells were removed. Uninoculated controls showed negligible chemical hydrolysis under cultivation conditions.', meaning: 'This supports an extracellular biological process, rather than acid alone or intact oligosaccharides simply entering cells.', limit: 'These experiments support the route; they do not by themselves identify the responsible enzyme.', source: 'Section 3.3; Fig. S5'},
    {label: 'Transcriptome & secretome', title: 'Multiple lines of evidence point to GH15', observation: 'Transcriptomic screening identified secreted GH15 candidates. Peptide matching, extracellular proteomics, and predicted structural similarity supported a glucoamylase-related protein.', meaning: 'A secreted GH15 glucoamylase is a plausible contributor to extracellular saccharification.', limit: 'The enzyme assignment is supported by combined evidence. It should not be presented as a purified-enzyme or genetic-knockout validation.', source: 'Section 3.4; Fig. 4; Tables S2–S3'}
  ],
  questions: [
    {title: 'Can the mechanism carry over to real food waste?', body: 'The first study isolated the question using potato starch. Real food-waste hydrolysates bring variable carbohydrates, proteins, lipids, salts, and possible inhibitors. Testing that complexity is a natural next direction.', next: 'Possible next step: compare defined starch hydrolysates with characterized food-waste feeds.'},
    {title: 'How mild can hydrolysis be?', body: 'More severe processing can release more glucose, but can also use more energy and form inhibitory byproducts such as HMF. The useful target is a feed the microalga can use—not necessarily the highest glucose concentration.', next: 'Possible next step: evaluate hydrolysis severity together with carbon conversion and biomass yield.'},
    {title: 'What controls carbon-use efficiency?', body: 'Growth and substrate conversion are different outcomes. The reported yields varied across hydrolysates, and defined maltose or G4 media showed a strain-specific yield pattern that deserves further investigation.', next: 'Possible next step: connect sugar composition, enzyme activity, and metabolic responses.'},
    {title: 'What changes when the process scales up?', body: 'The study’s preliminary life-cycle analysis identifies electricity as an important contributor in the hydrolysate scenario. Reactor efficiency and electricity supply therefore matter alongside biological performance.', next: 'Possible next step: assess process integration, energy demand, and environmental trade-offs at a relevant scale.'}
  ],
  // Fill this section when you are ready to share Study 02. No publication is implied.
  studyTwo: {
    status: 'Not yet published',
    title: 'The next chapter is still being written.',
    intro: 'This work has not yet been published. Its question, approach, findings, and connection to Study 01 will be added when available.',
    question: '', approach: '', finding: '', nextQuestion: '',
    doi: '',
    note: 'No unpublished findings are disclosed here.'
  }
};
