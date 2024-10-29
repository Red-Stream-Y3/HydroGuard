import React from "react";

const Literature = () => {
  return (
    <div id="literature-survey" className="py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Literature Survey
        </h2>
        <p className="mt-8 text-lg leading-8 text-gray-700">
          The current operational model of dams in Sri Lanka presents several
          challenges that necessitate the development of an integrated smart dam
          control system. Firstly, the semi-automatic operation of dams and the
          reliance on human decision-making for critical actions introduce a
          level of inefficiency and potential for errors. Human operators must
          continually monitor and adjust dam gates based on fluctuating water
          levels caused by the release rates of upper-level dams. This reactive
          approach can lead to suboptimal responses and mismatches between water
          discharge rates and demand.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Moreover, the lack of pre-emptive water release strategies to prevent
          potential floods poses a significant risk. The conventional practice
          of releasing water only when dams reach critical volume neglects the
          proactive management of environmental conditions that could lead to
          flooding. This emphasizes the need for a more predictive and adaptive
          system capable of releasing water in anticipation of changing
          conditions.
        </p>

        <blockquote className="mt-8 border-l-4 border-blue-500 pl-4 italic text-gray-500">
          Additionally, there is a notable absence of accountability concerning
          future rainfall predictions. The inability to adjust water levels in
          anticipation of forecasted rainfall increases the vulnerability of
          downstream areas to flooding.
        </blockquote>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Furthermore, the lack of a robust real-time warning system for
          communities downstream during dam releases poses a serious safety
          concern. An often-overlooked issue is the annual blocking of roads and
          loss of properties due to the unplanned release of water during the
          rainy season. An integrated smart dam control system should include
          features to optimize the timing and coordination of water releases to
          prevent road blockages and associated disruptions.
        </p>

        <h3 className="mt-12 text-2xl font-bold text-gray-900">References</h3>
        <ul className="mt-4 list-none text-gray-700 text-xs">
          <li id="ref1" className="mb-4">
            [1] S. Hossain, M. Nair, L. M. Sidek, and M. Marufuzzaman, "A
            pre-release concept for reservoir management and the effect analysis
            on flood control," in Water Resources Development and Management,
            2019, pp. 556–566. doi: 10.1007/978-981-15-1971-0_54.
          </li>
          <li id="ref2" className="mb-4">
            [2] S. S. Siddula, P. Babu, and P. C. Jain, "Water level monitoring
            and management of dams using IoT," in Proc. 2018 3rd Int. Conf.
            Internet of Things: Smart Innovation and Usages (IoT-SIU), Bhimtal,
            India, 2018, pp. 1-5. doi: 10.1109/IoT-SIU.2018.8519843.
          </li>
          <li id="ref3" className="mb-4">
            [3] Q. Wang, B. Li, Z. Deng, and W. Zhao, "Dam crack detection based
            on deep learning cascade detection algorithm," in Proc. 2023 3rd
            Int. Conf. Neural Networks, Information and Communication
            Engineering (NNICE), Guangzhou, China, 2023, pp. 131-134. doi:
            10.1109/NNICE58320.2023.10105763.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Literature;
