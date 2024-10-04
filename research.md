---
layout: default
---
# Research projects

## Summary 
I am most interested in testing the immutability of fundamental constants and mapping out the expansion history of the Universe through the measurements of a small temporal drift in the redshift of distant objects. Both projects count among the most exciting experiments planned for the next decade(s) and motivate, in large part, the construction of the several new spectroscopic facilities such as the [Extremely Large Telescope](https://elt.eso.org/science/) (but see also [PolyOculus](https://creol.ucf.edu/astrophotonics/creol-astrophotonics-polyoculus/)). Together with the search for an Earth-Sun system analogue and characterising exoplanet atmospheres, they are some of the most technically challenging projects of astronomical optical / near-infrared spectroscopy in the next 20 years and their success relies on new spectrographs reaching performance one order of magnitude better than has been achieved by any previous spectrograph. 

To perform these experiments, I focus on removing instrumental effects in extremely precise spectrographs, developing advanced data reduction software, developing spectral analysis software based on Artificial Intelligence (AI) methods. Until ANDES comes online, I am using ESPRESSO and HARPS spectrographs, the best currently available instruments for such studies. 

The main objectives of my research are to:
1. remove systematic effects spoiling precise and accurate spectroscopic measurements;
2. use these advancements to obtain measurements of fundamental constants and the redshift drift from the best currently available data;
3. prepare for ANDES observations. 

[A link to my publications on ADS](https://ui.adsabs.harvard.edu/search/fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq_database=(database%3Aastronomy%20OR%20database%3Aphysics)&q=author%3A%22Milakovic%2C%20D%22%20or%20author%3A%22Milakovi%2C%20D%22&sort=date%20desc%2C%20bibcode%20desc&p_=0){:target="_blank"}

## Fundamental constants

Any variation in the value of, e.g. the fine structure constant ($$\alpha$$), would lead to a paradigm shift in physics, including a new theory of gravity, of particle interactions, or both. Not detecting variations would constrain dark energy models in which a new degree of freedom (e.g. quintessence) couples to known matter fields, as well as string and Kaluza-Klein theories. 
While terrestrial experiments provide very stringent bounds on temporal evolution in the value of fundamental constants, astronomical measurements can probe whether they changed over billions of years, or whether they vary spatially in the Universe. 

Variations in $$\alpha$$ would cause relativistic perturbations to energy levels of atoms, manifesting as changes in the wavelengths of atomic transitions, $$\Delta \lambda / \lambda$$ (equivalent to a spectroscopic velocity shift, $$v$$). Mathematically, 

$$v \propto q \frac{\Delta\alpha}{\alpha} $$,

where $$q$$ is the theoretically derived proportionality coefficient and is different for each transition (even for the same atom). The latter point is crucial, as any value of $$\Delta\alpha/\alpha$$ results in different shifts for all observed transitions, creating a unique pattern of velocity shifts that can be retrieved through modelling. Generally, $$q$$ is largest for heavy element atoms and for transitions close to the ground state, because the change in the electric potential is the strongest. 

This cartoon illustrates the effect that changing $$\Delta\alpha/\alpha$$ has on observed wavelengths of six transitions commonly observed in quasar spectra. Strongest changes are seen for Fe II and Zn II, and the weakest for Mg II and Al III. The observable is a set of relative line offsets that cannot be mistaken for a simple velocity shift.

<div class="video-container">
	<video controls loop >
  		<source src="{{ site.my-media-path }}/videos/daoa.mp4" type="video/mp4">
	</video>
</div>
<br>

Measurements made using VLT/UVES and Keck/HIRES spectrographs hint towards $$\Delta\alpha/\alpha\neq0$$ (King et al. 2012), but systematic uncertainties dominated their error budget. Better instruments and methods are therefore required to establish whether fundamental constant variations occur. I apply newly developed spectral analysis methods based on Artificial Intelligence to analyse data from the new VLT/ESPRESSO spectrograph to produce new measurements free from systematic uncertainties.


## Redshift drift 

The redshift drift experiment will confirm a fundamental property of an accelerating universe, the temporal evolution of the redshift of an object in the cosmic expansion flow, $$\dot{z}\equiv {\rm d} z/{\rm d}t \neq 0$$. Reconstructing $$\dot{z}(z)$$ provides a unique measurement of the expansion history of the Universe that is non-geometric, model independent, and is straightforward to interpret, unlike large-scale structure or CMB measurements. In a universe described by Friedman-Lemaitre-Robertson-Walker metric, 

$$\dot{z}=(1+z)H(t_{\rm obs}) - H(t_{\rm em})$$, 

where $$H$$ is the expansion rate (the Hubble parameter) at the times of light emission and observation. 

The measurement principle is simple: one compares the redshifts of an object in the Hubble flow derived from multi-epoch observations, where the epochs are sufficiently separated in time so that the measurement uncertainty is smaller than the expected cosmological signal. A significant advantage of this experiment is that the signal grows linearly with time and the measurements are straightforward to interpret, requiring no assumptions about astrophysical processes (unlike standard candle measurements for example). 

Some of most precise measurements can be made from objects producing narrow emission or absorption features, that are seen at all redshifts, and do not experience particular accelerations from interactions with their environments. Low density gas in the Hubble flow, traced by the Lyman-$$\alpha$$ forest seen towards distant quasars, fulfils most of these criteria so is one of the best candidates for $$\dot{z}$$ measurements. The cartoon below illustrates the expected redshift drift in $$\Lambda$$CDM in the Lyman-$$\alpha$$ forest at $$z=3$$. For an individual line, the expected change is at the level of $$\dot{z}\sim 10^{-10}$$ per year. Because the change is so small, there is no appreciable shift (to the human eye) of line positions until several million years have elapsed. However, the large number of lines in conjunction with extremely precise spectrographs should allow the effect to be measured in only 20 years. 


<div class="video-container">
	<video controls>
  		<source src="{{ site.my-media-path }}/videos/zdot_3rows.mp4" type="video/mp4">
	</video>
</div>
<br>

# Projects


## HARPS as a testbed of new technology

Astronomical laser frequency combs (LFCs) are expected to provide the necessary technical requirements for the execution of the projects above. They produce a series of bright, stable, and unresolved emission lines with extremely well know frequencies. By observing their light in the same way as the science target light, it is possible to transfer the accuracy and precision of LFC onto the spectrograph's wavelength calibration. For this reason, they are expected to be deployed to all spectrographs aiming for 1 cm/s precision. I use LFCs to obtain the best possible wavelength calibration and characterise the instrument itself (e.g. its instrumental profile and detector effects). 

[HARPS LSF models are available here](https://zenodo.org/records/10492990)

## Spectroscopic measurements using Artificial Intelligence

Absorption systems seen in quasar spectra arise in complex arrangements of gaseous material in between and surrounding galaxies, both at small (pc) and large (kpc) scales. Determining the accurate structure of an absorption complex has some ambiguity because different spatial configurations of gas clouds can generate indistinguishable spectral counterparts. The impact of this ambiguity on physical parameters measurements (such as $$\Delta \alpha/\alpha$$ and $$\dot{z}$$) must be controlled for in scientific analyses. 

AI-VPFIT is a new system for quick, robust, and unbiased analysis of absorption spectra based on non-linear least-squares, genetic algorithms, AI, Monte Carlo methods, and a spectroscopic information criterion to identify the optimal descent path in a highly dimensional parameter space. The Monte Carlo aspect allows the construction of many independent models of the same data, free from any human decisions and therefore bias. Because the construction of each model follows a different path, this provides a detailed map of the parameter space that is unattainable when relying only on human efforts. AI-VPFIT has been used to discover, quantify, and minimise previously unknown systematic effects, to measure $$\Delta \alpha/\alpha$$, detect spatial variations of Mg isotopic abundances at $$z=1.15$$, and to measure $$^{12}{\rm C}/^{13}{\rm C}$$ at $$z=1.78$$. Its every application so far has produced a major scientific result, making it indispensable for all future measurements.

