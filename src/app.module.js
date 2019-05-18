import angular from 'angularjs'
import style from './style'
import * as calButton from './components/cal-button'
import * as calMain from './components/cal-main'
import * as calScreen from './components/cal-screen'

angular.module('calApp', [
  calMain.nameModule,
  calScreen.nameModule,
  calButton.nameModule
]);
