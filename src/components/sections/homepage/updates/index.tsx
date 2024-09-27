"use client";
import Icon from "@/components/shared/Icon";
import React from "react";

const Updates = () => {
  return (
    <section className="w-full flex flex-col gap-3">
      <div className="flex justify-between w-full">
        <h2 className="font-semibold text-black text-3xl">Recent Updates</h2>
        <span className="flex items-center text-sm gap-3">
          Last updated 23/05/2024{" "}
          <button>
            <Icon name="bx-refresh" />
          </button>
        </span>
      </div>
      <div className="max-w-full bg-white border-gray-300 border rounded-lg overflow-x-auto">
        <table className="w-full table-auto">
          <thead className=" border-gray-300 border-b-[1px]">
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-2 font-medium">Name</th>
              <th className="min-w-[150px] px-4 py-2 font-medium">Funding</th>
              <th className="min-w-[120px] px-4 py-2 font-medium">Valuation</th>
              <th className="min-w-[120px] px-4 py-2 font-medium">Revenue</th>
              <th className="min-w-[120px] px-4 py-2 font-medium">Growth</th>
            </tr>
          </thead>
          <tbody className="p-3">
            <tr>
              <td className="border-b text-center border-[#eee] py-3 px-3 dark:border-strokedark">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex rounded-full bg-[var(--growjo-main)]"></div>
                  <span className="text-[var(--growjo-main)]">Open AI</span>
                </div>
              </td>

              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p>Preseed</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p>$50M</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                $100M
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p
                  className={`inline-flex rounded-full bg-opacity-20 px-3 py-1 text-sm font-medium ${
                    true
                      ? "bg-green-600 text-green-600"
                      : false
                        ? "bg-red-500 text-red-500"
                        : "bg-yellow-500 text-yellow-500"
                  }`}
                >
                  50%
                </p>
              </td>
            </tr>
            <tr className="bg-[#F9FFF7]">
              <td className="border-b text-center border-[#eee] py-3 px-3 dark:border-strokedark">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex rounded-full bg-[var(--growjo-primary)]"></div>
                  <span className="text-[var(--growjo-primary)]">Open AI</span>
                </div>
              </td>

              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p>Preseed</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p>$50M</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                $100M
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p
                  className={`inline-flex rounded-full bg-opacity-20 px-3 py-1 text-sm font-medium ${
                    true
                      ? "bg-green-600 text-green-600"
                      : false
                        ? "bg-red-500 text-red-500"
                        : "bg-yellow-500 text-yellow-500"
                  }`}
                >
                  50%
                </p>
              </td>
            </tr>
            <tr>
              <td className="border-b text-center border-[#eee] py-3 px-3 dark:border-strokedark">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex rounded-full bg-[#662500]"></div>
                  <span className="text-[var(--growjo-main)]">Open AI</span>
                </div>
              </td>

              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p>Preseed</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p>$50M</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                $100M
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p
                  className={`inline-flex rounded-full bg-opacity-20 px-3 py-1 text-sm font-medium ${
                    true
                      ? "bg-green-600 text-green-600"
                      : false
                        ? "bg-red-500 text-red-500"
                        : "bg-yellow-500 text-yellow-500"
                  }`}
                >
                  50%
                </p>
              </td>
            </tr>
            <tr>
              <td className="border-b text-center border-[#eee] py-3 px-3 dark:border-strokedark">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex rounded-full bg-[#AECAE3]"></div>
                  <span className="text-[var(--growjo-main)]">Open AI</span>
                </div>
              </td>

              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p>Preseed</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p>$50M</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                $100M
              </td>
              <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                <p
                  className={`inline-flex rounded-full bg-opacity-20 px-3 py-1 text-sm font-medium ${
                    true
                      ? "bg-green-600 text-green-600"
                      : false
                        ? "bg-red-500 text-red-500"
                        : "bg-yellow-500 text-yellow-500"
                  }`}
                >
                  50%
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Updates;
