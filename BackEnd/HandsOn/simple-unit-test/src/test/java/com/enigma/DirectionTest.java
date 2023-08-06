package com.enigma;

import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

public class DirectionTest {

    @Test
    public void testTurnRightFromNorth() {
        Direction result = Direction.NORT.turnRight();
        Assert.assertEquals(Direction.EAST, result);
    }

    @Test
    public void testTurnRightFromEast() {
        Direction result = Direction.EAST.turnRight();
        Assert.assertEquals(Direction.SOUTH, result);
    }

    @Test
    public void testTurnRightFromSouth() {
        Direction result = Direction.SOUTH.turnRight();
        Assert.assertEquals(Direction.WEST, result);
    }

    @Test
    public void testTurnRightFromWest() {
        Direction result = Direction.WEST.turnRight();
        Assert.assertEquals(Direction.NORT, result);
    }

    @Test
    public void testTurnLeftFromNorth() {
        Direction result = Direction.NORT.turnLeft();
        Assert.assertEquals(Direction.WEST, result);
    }

    @Test
    public void testTurnLeftFromWest() {
        Direction result = Direction.WEST.turnLeft();
        Assert. assertEquals(Direction.SOUTH, result);
    }

    @Test
    public void testTurnLeftFromSouth() {
        Direction result = Direction.SOUTH.turnLeft();
        Assert. assertEquals(Direction.EAST, result);
    }

    @Test
    public void testTurnLeftFromEast() {
        Direction result = Direction.EAST.turnLeft();
        Assert.assertEquals(Direction.NORT, result);
    }
}