import { IExplanationDashboardData } from "@responsible-ai/interpret";

export const automlMimicAdult: IExplanationDashboardData = {
  modelInformation: { modelClass: "blackbox", method: "classifier" },
  dataSummary: {
    featureNames: [
      "Column1",
      "Column2",
      "Column3",
      "Column4",
      "Column5",
      "Column6",
      "Column7",
      "Column8",
      "Column9",
      "Column10",
      "Column11",
      "Column12",
      "Column13",
      "Column14"
    ],
    classNames: [" <=50K", " >50K"]
  },
  precomputedExplanations: {
    localFeatureImportance: {
      intercept: [2.017027712531668, -2.017027712531668],
      scores: [
        [
          [
            0.3983844330617047,
            -0.007446859076005137,
            -0.011284607644183499,
            -0.011639590771705607,
            0.13797249559423214,
            1.1299295633569393,
            0.10483989218975776,
            -0.07662816714907031,
            -0.00990259974787941,
            0.19384559313235822,
            0.1231644403583161,
            0.029931112742487255,
            0.15630157046311205,
            -0.011875052435833713
          ],
          [
            0.9121102147381127,
            -0.014893369015455753,
            0.06288009358930821,
            0.03236953362735648,
            -0.7303862839495617,
            1.3777566009250506,
            -0.2314539971140443,
            -0.13337987246139965,
            -0.00350515816823669,
            0.11738792312770502,
            0.1388117775371375,
            0.0349846964039984,
            0.39774693763619484,
            -0.008223446249958626
          ],
          [
            -0.6909525158636243,
            -0.21172909591586708,
            -0.00018149000874417652,
            0.024230902003562402,
            -0.8473793466799153,
            1.0482247382115149,
            -0.23459771884396824,
            -0.0845509300999351,
            0.11065070705422428,
            0.22189543376231105,
            0.17377892670293218,
            0.03111581380124407,
            0.09564100246642705,
            -0.010629925467898777
          ],
          [
            0.036326586279450464,
            -0.010689275128596845,
            -0.011500723210033805,
            0.009429516614012744,
            -0.8029923787291721,
            1.4041147883221359,
            0.24399358737609791,
            -0.10397518612882117,
            -0.01158925720009654,
            0.1805276579046236,
            0.18477344522408906,
            0.0351527694385445,
            0.1650821745932958,
            -0.01170048391572412
          ],
          [
            0.03111701839051829,
            0.12687720782761477,
            -0.008625702891362825,
            -0.010628941903024491,
            0.16465828862577583,
            0.8764196131226375,
            0.045151988362574516,
            -0.11176953189415802,
            -0.007084609045849493,
            -0.1475309269363674,
            0.4252504847221428,
            0.03137305059960977,
            -0.6207376822287531,
            -0.010903900381217699
          ]
        ],
        [
          [
            -0.3983844330617047,
            0.007446859076005137,
            0.011284607644183499,
            0.011639590771705607,
            -0.13797249559423214,
            -1.1299295633569393,
            -0.10483989218975776,
            0.07662816714907031,
            0.00990259974787941,
            -0.19384559313235822,
            -0.1231644403583161,
            -0.029931112742487255,
            -0.15630157046311205,
            0.011875052435833713
          ],
          [
            -0.9121102147381127,
            0.014893369015455753,
            -0.06288009358930821,
            -0.03236953362735648,
            0.7303862839495617,
            -1.3777566009250506,
            0.2314539971140443,
            0.13337987246139965,
            0.00350515816823669,
            -0.11738792312770502,
            -0.1388117775371375,
            -0.0349846964039984,
            -0.39774693763619484,
            0.008223446249958626
          ],
          [
            0.6909525158636243,
            0.21172909591586708,
            0.00018149000874417652,
            -0.024230902003562402,
            0.8473793466799153,
            -1.0482247382115149,
            0.23459771884396824,
            0.0845509300999351,
            -0.11065070705422428,
            -0.22189543376231105,
            -0.17377892670293218,
            -0.03111581380124407,
            -0.09564100246642705,
            0.010629925467898777
          ],
          [
            -0.036326586279450464,
            0.010689275128596845,
            0.011500723210033805,
            -0.009429516614012744,
            0.8029923787291721,
            -1.4041147883221359,
            -0.24399358737609791,
            0.10397518612882117,
            0.01158925720009654,
            -0.1805276579046236,
            -0.18477344522408906,
            -0.0351527694385445,
            -0.1650821745932958,
            0.01170048391572412
          ],
          [
            -0.03111701839051829,
            -0.12687720782761477,
            0.008625702891362825,
            0.010628941903024491,
            -0.16465828862577583,
            -0.8764196131226375,
            -0.045151988362574516,
            0.11176953189415802,
            0.007084609045849493,
            0.1475309269363674,
            -0.4252504847221428,
            -0.03137305059960977,
            0.6207376822287531,
            0.010903900381217699
          ]
        ]
      ]
    }
  }
};
