var actions = {
    //==================//
    // TANKS
    //==================//
    DRK: {
        buffs: {
            [ib.Delerium]: {
                name: "Delirium", 
                order: 0, time: 10, max: 5,
                type: "gcds",
                ids: [
                    ia.BloodSpiller, ia.Quietus
                ],
                visual: { type: "ARROW", color: "red"}
            },
            [ib.BloodWeapon]: {
                name: "Blood Weapon", 
                order: 1, time: 10, max: 5,
                type: "gcds",
                ids: [
                    ia.HardSlash, ia.SiphonStrike, ia.Souleater, ia.Unmend, ia.Unleash, ia.StalwartSoul, ia.BloodSpiller, ia.Quietus
                ],
                visual: {type: "BAR", color: "blue", glow: "dark"}
            }
        },
        alias: {}
    },
    WAR: {
        buffs: {
            [ib.InnerRelease]: {
                name: "Inner Release", 
                order: 0, time: 10, max: 5,
                type: "gcds",
                ids: [
                    ia.FellCleave, ia.Decimate
                ],
                visual: {type: "ARROW", color: "orange"}
            },
            [ib.StormsEye]: {
                name: "Storms Eye", order: 1,
                max: 60,
                type: "timer",
                visual: {type: "BAR", icon: "stormseye", color: "red", danger: true}
            }
        },
        alias: {}
    },
    PLD: {
        buffs: {
            [ib.Requiescat]: {
                name: "Requiescat", 
                order: 0, time: 12, max: 5,
                type: "gcds",
                ids: [
                    ia.HolySpirit, ia.HolyCircle, ia.Confiteor
                ],
                visual: {type: "ARROW", color: "blue"}
            },
            [ib.FightOrFlight]: {
                name: "Fight or Flight", 
                order: 2, time: 25, max: 11,
                type: "gcds",
                ids: [
                    ia.FastBlade, ia.RiotBlade, ia.RoyalAuthority, ia.Atonement, ia.GoringBlade, ia.TotalEclipse, ia.Prominence
                ],
                visual: {type: "BAR", color: "red", glow: "red"}
            },
            [ib.GoringBlade]: {
                name: "Goring Blade", order: 1,
                max: 21,
                type: "timer",
                visual: {type: "BAR", icon: "goringblade", color: "orange", danger: true}
            }
        },
        alias: {}
    },
    GNB: {
        buffs: {
            [ib.NoMercy]: {
                name: "No Mercy", 
                order: 0, time: 20, max: 9,
                type: "gcds",
                ids: [
                    ia.DemonSlice, ia.DemonSlaughter, ia.KeenEdge, ia.BrutalShell, ia.SolidBarrel, ia.BurstStrike, ia.SonicBreak,
                    ia.GnashingFang, ia.SavageClaw, ia.WickedTalon, ia.FatedCicle
                ],
                visual: {type: "ARROW", size: "m", color: "orange"}
            }
        },
        alias: {}
    },
    //================//
    // HEALERS
    //================//
    SCH: {
        buffs: {
            [ib.Biolysis]: {
                name: "Biolysis", 
                order: 0, max: 30,
                type: "timer",
                visual: {type: "BAR", icon: "biolysis", color: "green", danger: true}
            }
        },
        alias: {
            [ib.SchBio]: [ib.Biolysis],
            [ib.SchBio2]: [ib.Biolysis]
        }
    },
    WHM: {
        buffs: {
            [ib.Dia]: {
                name: "Dia", 
                order: 0, max: 30,
                type: "timer",
                visual: {type: "BAR", icon: "dia", color: "blue", danger: true}
            }
        },
        alias: {
            [ib.Aero]: [ib.Dia],
            [ib.Aero2]: [ib.Dia]
        }
    },
    AST: {
        buffs: {
            [ib.Combust3]: {
                name: "Combust", 
                order: 0, max: 30,
                type: "timer",
                visual: {type: "BAR", icon: "combust", color: "blue", danger: true}
            }
        },
        alias: {
            [ib.Combust]: [ib.Combust3],
            [ib.Combust2]: [ib.Combust3]
        }
    },
    //===============//
    // MELEE DPS
    //===============//
    MNK: {
        buffs: {
            [ib.PerfectBalance]: {
                name: "Perfect Balance", 
                order: 0, time: 10, max: 5,
                type: "gcds",
                ids: [
                    ia.Bootshine, ia.TrueStrike, ia.SnapPunch, ia.DragonKick, ia.TwinSnakes, ia.Demolish,
                    ia.ArmOfTheDestroyer, ia.FourPointFury, ia.RockBreaker
                ],
                visual: {type: "ARROW", color: "yellow"}
            },
            [ib.RiddleOfFire]: {
                name: "Riddle of Fire", 
                order: 2, time: 20, max: 9,
                type: "gcds",
                ids: [
                    ia.Bootshine, ia.TrueStrike, ia.SnapPunch, ia.DragonKick, ia.TwinSnakes, ia.Demolish,
                    ia.ArmOfTheDestroyer, ia.FourPointFury, ia.RockBreaker
                ],
                visual: {type: "BAR", color: "red", glow: "red"}
            }
        },
        alias: {}
    },
    DRG: {
        buffs: {
            [ib.LanceCharge]: {
                name: "Lance Charge", 
                order: 0, time: 20, max: 9,
                type: "gcds",
                ids: [
                    ia.TrueThrust, ia.Disembowel, ia.ChaosThrust, ia.WheelingThrust, ia.VorpalThrust, ia.FullThrust,
                    ia.FangAndClaw, ia.RaidenThrust, ia.DoomSpike, ia.SonicThrust, ia.CoerthanTorment, ia.PiercingTalon
                ],
                visual: {type: "ARROW", color: "red", size: "m"}
            },
            [ib.RightEye]: {
                name: "Right Eye", 
                order: 2, time: 20, max: 9,
                type: "gcds",
                ids: [
                    ia.TrueThrust, ia.Disembowel, ia.ChaosThrust, ia.WheelingThrust, ia.VorpalThrust, ia.FullThrust,
                    ia.FangAndClaw, ia.RaidenThrust, ia.DoomSpike, ia.SonicThrust, ia.CoerthanTorment, ia.PiercingTalon
                ],
                visual: {type: "BAR", color: "orange", glow: "orange"}
            }
        },
        alias: {
            [ib.RightEye2]: ib.RightEye
        }
    },
    NIN: {
        buffs: {
            [ib.TrickAttack]: {
                name: "Trick Attack", 
                order: 0, time: 15, max: 7,
                type: "gcds",
                ids: [
                    ia.SpinningEdge, ia.GustSlash, ia.AeolionEdge, ia.ArmorCrush, ia.ShadowFang, ia.ThrowingDagger, ia.DeathBlossom, ia.Hakke,
                    ia.Fuma, ia.Katon, ia.Raiton, ia.Hyothon, ia.Huton, ia.Doton, ia.Suiton, ia.Goka, ia.Hyosho
                ],
                visual: {type: "ARROW", size: "m", color: "yellow"}
            },
        },
        alias: {}
    },
    SAM: {
        buffs: {
            [ib.Jinpu]: {
                name: "Jinpu", 
                order: 0, max: 40,
                type: "timer",
                visual: {type: "BAR", icon: "jinpu", color: "blue", danger: true}
            },
            [ib.Shifu]: {
                name: "Shifu", 
                order: 1, max: 40,
                type: "timer",
                visual: {type: "BAR", icon: "shifu", color: "red", danger: true}
            },
            [ib.Higanbana]: {
                name: "Higanbana", 
                order: 2, max: 60,
                type: "timer",
                visual: {type: "BAR", icon: "higanbana", color: "orange", danger: true}
            }
        },
        alias: {}
    },
    //==================//
    // PHYSICAL RANGED
    //==================//
    BRD: {
        buffs: {
            [ib.CausticBite]: {
                name: "Caustic Bite", 
                order: 0, max: 30,
                type: "timer",
                visual: {type: "BAR", icon: "causticbite", color: "red", danger: true}
            },
            [ib.Stormbite]: {
                name: "Stormbite", 
                order: 1, max: 30,
                type: "timer",
                visual: {type: "BAR", icon: "stormbite", color: "blue", danger: true}
            },
            [ib.RagingStrikes]: {
                name: "Raging Strikes", 
                order: 2, time: 20, max: 9, // +2 for barrage?
                type: "gcds",
                ids: [
                    ia.BurstShot, ia.RefulgentArrow, ia.CausticBite, ia.Stormbite, ia.IronJaws, ia.QuickNock
                ],
                visual: {type: "ARROW", size: "m", color: "orange"}
            }
        },
        alias: {
            [ib.VenomousBite]: ib.CausticBite,
            [ib.Windbite]: ib.Stormbite
        }
    },
    MCH: {
        buffs: {
            [ia.Hypercharge]: {
                name: "Hypercharge", 
                order: 0, time: 9, max: 5,
                combo: true,
                type: "gcds",
                ids: [
                    ia.HeatBlast, ia.AutoCrossbow
                ],
                visual: {type: "ARROW", color: "orange"}
            },
            [ib.Wildfire]: {
                name: "Wildfire", 
                order: 1, time: 10, max: 6,
                type: "gcds",
                ids: [
                    ia.HeatedSplitShot, ia.HeatedSlugShot, ia.HeatedCleanShot, ia.AirAnchor, ia.Drill, ia.BioBlaster, ia.HeatBlast, ia.AutoCrossbow,
                    ia.HotShot, ia.CleanShot
                ],
                visual: {type: "BAR", color: "red", glow: "red"}
            }
        },
        alias: {}
    },
    DNC: {
        buffs: {
            [ib.Devilment]: {
                name: "Devilment", 
                order: 0, time: 20, max: 10,
                type: "gcds",
                ids: [
                    ia.Cascade, ia.Fountain, ia.Windmill, ia.Bladeshower,
                    ia.ReverseCascade, ia.Fountainfall, ia.ReverseWindmill, ia.Bloodshower,
                    ia.StandardStep, ia.DoubleStandardFinish, ia.TechnicalStep, ia.QuadTechnicalFinish,
                    ia.Emboite, ia.Entrechat, ia.Jete, ia.Pirouette, ia.SaberDance,
                ],
                visual: {type: "BAR", color: "red", glow: "red"}
            },
        },
        alias: {}
    },
    //================//
    // MAGICAL DPS
    //================//
    BLM: {
        buffs: {
            [ib.Thunder3]: {
                name: "Thunder 3", 
                order: 0, max: 24,
                type: "timer",
                visual: {type: "BAR", icon: "thunder3", color: "blue", danger: true},
                hides: [ib.Thunder4]
            },
            [ib.Thunder4]: {
                name: "Thunder 4", 
                order: 1, max: 18,
                type: "timer",
                visual: {type: "BAR", icon: "thunder4", color: "purple", danger: true},
                hides: [ib.Thunder3],
                hidden: true
            }
        },
        alias: {
            [ib.Thunder]: ib.Thunder3,
            [ib.Thunder2]: ib.Thunder4
        }
    },
    SMN: {
        buffs: {
            [ia.SummonBahamut]: {
                name: "Bahamut", 
                order: 0, time: 21, max: 8,
                combo: true,
                type: "gcds",
                ids: [ia.Wyrmwave],  // wrymwave
                visual: {type: "ARROW", size: "m", color: "blue"},
                hides: ia.FirebirdTrance
            },
            [ia.FirebirdTrance]: {
                name: "Pheonix", 
                order: 1, time: 21, max: 8,
                combo: true,
                type: "gcds",
                ids: [ia.ScarletFlame],
                visual: {type: "ARROW", size: "m", color: "orange"},
                hides: ia.SummonBahamut,
                hidden: true
            },
            [ib.SmnBio3]: {
                name: "Bio", 
                order: 2, max: 30,
                type: "timer",
                visual: {type: "BAR", icon: "bio", color: "green", danger: true},
            },
            [ib.Miasma]: {
                name: "Miasma", 
                order: 3, max: 30,
                type: "timer",
                visual: {type: "BAR", icon: "miasma", color: "blue", danger: true},
            }
        },
        alias: {
            [ib.SmnBio]: [ib.SmnBio3],
            [ib.SmnBio2]: [ib.SmnBio3]
        }
    },
    RDM: {
        buffs: {
            [ib.Manification]: {
                name: "Manification", 
                order: 0, time: 10, max: 5,
                type: "gcds",
                noRefresh: true,
                ids: [
                    ia.Jolt, ia.Verareo, ia.Verthunder, ia.Verfire, ia.Verstone, ia.Vercure,
                    ia.Verareo2, ia.Verthunder2, ia.Impact, ia.ERiposte, ia.ERedoublement, ia.EZ,
                    ia.EMoul, ia.EReprise, ia.Verfire, ia.Verholy, ia.Scorch
                ],
                visual: {type: "ARROW", color: "blue"}
            }
        },
        alias: {}
    },
    //====================//
    // BLU
    //====================//
    BLU: {
        buffs: {
            [ib.SongOfTorment]: {
                name: "Song of Torment", 
                order: 0, max: 30,
                type: "timer",
                visual: {type: "BAR", icon: "songoftorment", color: "red", danger: true}
            }
        },
        alias: {}
    },
};