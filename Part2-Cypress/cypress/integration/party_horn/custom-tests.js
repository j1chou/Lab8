describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
        expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
        expect($el).to.have.value(33);
    });
  });

  it('audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
        expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('image and sound source changes when radio button', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {
        expect($el).to.have.prop('src',"http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg");
    });
    cy.get('#horn-sound').then(($el) => {
        expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3");
    });
  });

  it('volume image changes when increasing volume', () => {
    cy.get('#volume-slider').invoke('val', 1).trigger('input');
    cy.get('#volume-image').then(($el) => {
        expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg");
    });
    cy.get('#volume-slider').invoke('val', 34).trigger('input');
    cy.get('#volume-image').then(($el) => {
        expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg");
    });
    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then(($el) => {
        expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg");
    });
  });

  it('honk button disabled when textbox input is empty or nonchar', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#honk-btn').then(($el) => {
        expect($el).to.have.attr('disabled', "disabled");
    });
    cy.get('#volume-number').clear().type('A');
    cy.get('#honk-btn').then(($el) => {
        expect($el).to.have.attr('disabled', "disabled");
    });
  });

  it('Error is shown when number outside of given range is entered', () => {
    cy.get('#volume-number').clear().type('200').type('{enter}');
    cy.get('input:invalid').should('have.length',1);
  });
});
