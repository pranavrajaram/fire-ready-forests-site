# Fire-Ready Forests Data Challenge

Welcome! This site contains my submission for the 2025 Fire-Ready Forests Data Challenge. This competition, [hosted by the ProWESS Center and the Wildfire Science & Technology Commons](https://prowesscenter.org/datachallenge/), aimed to enhance predictions of tree species, height, location, and other critical metrics to improve the ability of 3D physics-based fire models to accurately predict fire behavior and effects. The project was completed in a sequence of 4 sprints outlined below. Feel free to take a look around!

## Overview of Sprints
- **Sprint 1**: Understanding the Data
    - Explored the structure and variability of field data vs. FIA inventory data at Independence Lake and other ecosystems. Compared key metrics like tree height and diameter, and examined how structural relationships vary across ecological zones.
- **Sprint 2**: Generating treelists from ALS and FastFuels data
    - Created Canopy Height Models and treelists from ALS (Airborne Laser Scanning) data. Used the FastFuels pipeline to generate and compare sample vs. population treelists, analyzing the impact of sampling bias and dataset resolution on structural outputs.
- **Sprint 3**: Evaluating TLS vs. field data and predicting tree metrics with ALS
    - Used TLS (Terrestrial Laser Scanning) data to compare tree structure against field inventories. Trained machine learning models to predict tree metrics (e.g., DBH, species, crown base height) with ALS data.
- **Sprint 4**:  Predicting PFT, genus, and species with labeled TLS data
    - Integrated multiple datasets to label TLS-only trees with predicted plant functional type (PFT), genus, and species. Built final models and applied them to generate 3D-labeled forest structures for simulation ready inputs.
