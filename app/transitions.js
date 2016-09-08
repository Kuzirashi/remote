export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('house'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.hasClass('bindable-to-up'),
    this.use('toUp')
  );
}
