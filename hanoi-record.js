var hanoi = function towersOfHanoiMoves(disks) {
  if (disks === 0) {
    return 0;
  } else {
    return Math.pow(2, disks) - 1;
  }
}
