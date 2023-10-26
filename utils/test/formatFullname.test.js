const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" is different  than <firstname> <lastname>', () => {
    expect(formatFullname('john')).to.equal('Error');
    expect(formatFullname('john doe dam')).to.equal('Error');
    expect(formatFullname('test jest west gest')).to.equal('Error');
  });

  it('should return good format name if proper arg', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('aMaNdA SmIth')).to.equal('Amanda Smith');
    expect(formatFullname('kUBA pEN')).to.equal('Kuba Pen');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
  });

});