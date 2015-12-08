// 
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

import * as assert from 'assert';
import * as path from 'path';

import * as vscode from 'vscode';
import {CanIUse} from '../can-i-use';

suite("Can I Use Tests", () => {
        test("Get rule from dictionary", () => {
                let canIUseExt = new CanIUse();

                assert.equal(canIUseExt.getNormalizedRule("animation-name"), "css-animation");
        });

        test("Get word when rule is not in the dictionary", () => {
                let canIUseExt = new CanIUse();

                assert.equal(canIUseExt.getNormalizedRule("outline"), "outline");
        });

        test("Get rule from dictionary case insensitively", () => {
                let canIUseExt = new CanIUse();

                assert.equal(canIUseExt.getNormalizedRule("scaleZ"), "transforms3d");
        });

        test("Get well-supported property", () => {
                let canIUseExt = new CanIUse();

                assert.equal(canIUseExt.isWellSupported(canIUseExt.getNormalizedRule("background-color")), true);
        });

        test("New properties won't show as well supported", () => {
                let canIUseExt = new CanIUse();

                assert.equal(canIUseExt.isWellSupported(canIUseExt.getNormalizedRule("animation-name")), false);
        });

        test("Get property stats", () => {
                let canIUseExt = new CanIUse();
                let cssZoom = {
                        "stats": {
                                "ie": {
                                        "5.5": "y",
                                        "6": "y",
                                        "7": "y",
                                        "8": "y #1",
                                        "9": "y #1",
                                        "10": "y #1",
                                        "11": "y #1"
                                },
                                "edge": {
                                        "12": "y",
                                        "13": "y",
                                        "14": "y"
                                },
                                "firefox": {
                                        "2": "n",
                                        "3": "n",
                                        "3.5": "n",
                                        "3.6": "n",
                                        "4": "n",
                                        "5": "n",
                                        "6": "n",
                                        "7": "n",
                                        "8": "n",
                                        "9": "n",
                                        "10": "n",
                                        "11": "n",
                                        "12": "n",
                                        "13": "n",
                                        "14": "n",
                                        "15": "n",
                                        "16": "n",
                                        "17": "n",
                                        "18": "n",
                                        "19": "n",
                                        "20": "n",
                                        "21": "n",
                                        "22": "n",
                                        "23": "n",
                                        "24": "n",
                                        "25": "n",
                                        "26": "n",
                                        "27": "n",
                                        "28": "n",
                                        "29": "n",
                                        "30": "n",
                                        "31": "n",
                                        "32": "n",
                                        "33": "n",
                                        "34": "n",
                                        "35": "n",
                                        "36": "n",
                                        "37": "n",
                                        "38": "n",
                                        "39": "n",
                                        "40": "n",
                                        "41": "n",
                                        "42": "n",
                                        "43": "n",
                                        "44": "n",
                                        "45": "n"
                                },
                                "chrome": {
                                        "4": "y",
                                        "5": "y",
                                        "6": "y",
                                        "7": "y",
                                        "8": "y",
                                        "9": "y",
                                        "10": "y",
                                        "11": "y",
                                        "12": "y",
                                        "13": "y",
                                        "14": "y",
                                        "15": "y",
                                        "16": "y",
                                        "17": "y",
                                        "18": "y",
                                        "19": "y",
                                        "20": "y",
                                        "21": "y",
                                        "22": "y",
                                        "23": "y",
                                        "24": "y",
                                        "25": "y",
                                        "26": "y",
                                        "27": "y",
                                        "28": "y",
                                        "29": "y",
                                        "30": "y",
                                        "31": "y",
                                        "32": "y",
                                        "33": "y",
                                        "34": "y",
                                        "35": "y",
                                        "36": "y",
                                        "37": "y",
                                        "38": "y",
                                        "39": "y",
                                        "40": "y",
                                        "41": "y",
                                        "42": "y",
                                        "43": "y",
                                        "44": "y",
                                        "45": "y",
                                        "46": "y",
                                        "47": "y",
                                        "48": "y",
                                        "49": "y"
                                },
                                "safari": {
                                        "3.1": "n",
                                        "3.2": "n",
                                        "4": "y",
                                        "5": "y",
                                        "5.1": "y",
                                        "6": "y",
                                        "6.1": "y",
                                        "7": "y",
                                        "7.1": "y",
                                        "8": "y",
                                        "9": "y"
                                },
                                "opera": {
                                        "9": "n",
                                        "9.5-9.6": "n",
                                        "10.0-10.1": "n",
                                        "10.5": "n",
                                        "10.6": "n",
                                        "11": "n",
                                        "11.1": "n",
                                        "11.5": "n",
                                        "11.6": "n",
                                        "12": "n",
                                        "12.1": "n",
                                        "15": "y",
                                        "16": "y",
                                        "17": "y",
                                        "18": "y",
                                        "19": "y",
                                        "20": "y",
                                        "21": "y",
                                        "22": "y",
                                        "23": "y",
                                        "24": "y",
                                        "25": "y",
                                        "26": "y",
                                        "27": "y",
                                        "28": "y",
                                        "29": "y",
                                        "30": "y",
                                        "31": "y",
                                        "32": "y",
                                        "33": "y",
                                        "34": "y",
                                        "35": "y"
                                },
                                "ios_saf": {
                                        "3.2": "n",
                                        "4.0-4.1": "y",
                                        "4.2-4.3": "y",
                                        "5.0-5.1": "y",
                                        "6.0-6.1": "y",
                                        "7.0-7.1": "y",
                                        "8": "y",
                                        "8.1-8.4": "y",
                                        "9.0-9.1": "y"
                                },
                                "op_mini": {
                                        "5.0-8.0": "n"
                                },
                                "android": {
                                        "2.1": "y",
                                        "2.2": "y",
                                        "2.3": "y",
                                        "3": "y",
                                        "4": "y",
                                        "4.1": "y",
                                        "4.2-4.3": "y",
                                        "4.4": "y",
                                        "4.4.3-4.4.4": "y",
                                        "44": "y"
                                },
                                "bb": {
                                        "7": "y",
                                        "10": "y"
                                },
                                "op_mob": {
                                        "10": "n",
                                        "11": "n",
                                        "11.1": "n",
                                        "11.5": "n",
                                        "12": "n",
                                        "12.1": "n",
                                        "33": "y"
                                },
                                "and_chr": {
                                        "46": "y"
                                },
                                "and_ff": {
                                        "42": "n"
                                },
                                "ie_mob": {
                                        "10": "y #1",
                                        "11": "y #1"
                                },
                                "and_uc": {
                                        "9.9": "y"
                                }
                        }
                };

                assert.equal(canIUseExt.getSupportStatus(cssZoom), "Can I Use: IE ✔ 5.5+ Firefox ✘ Chrome ✔ 4+ Safari ✔ 4+ Opera ✔ 15+");
        });
});
