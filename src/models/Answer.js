export default class Answer {

  static schema = {
    name: 'Answer',
    primaryKey: 'id',
    properties: {
      id: 'string',
      content: 'string',
      disease: 'string',
      children: { type: 'list', objectType: 'Ref' },
    },
  };

  get questions() {
    return this.children.map(ref => ref.id) || [];
  }

}
