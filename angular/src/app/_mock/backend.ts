// tslint:disable:max-line-length
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay, dematerialize, materialize, mergeMap } from "rxjs/operators";

import { Injectable } from "@angular/core";
import { MESSAGES } from "./messages";

const sharedOptions = {
  borderWidth: 3,
  pointRadius: 3,
  pointBorderWidth: 1,
  maintainAspectRatio: true,
  responsive: true,
  legend: {
    display: false
  }
};

const gridOptions = {
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(0,0,0,0.02)",
          zeroLineColor: "rgba(0,0,0,0)"
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(0,0,0,0)",
          zeroLineColor: "rgba(0,0,0,0)"
        },
        position: "left",
        ticks: { display: false, beginAtZero: true, suggestedMax: 7 }
      }
    ]
  }
};

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith("/api/dashboard") && method === "GET":
          return getDashboardData();
        case url.endsWith("/api/messages") && method === "GET":
          return getMessages();
        case url.match(/\/api\/messages\/\d+$/) && method === "GET":
          return getMessage();
        case url.endsWith("/api/taskboard") && method === "GET":
          return getTaskboard();
        case url.endsWith("/api/contacts") && method === "GET":
          return getContacts();
        case url.endsWith("/api/activity") && method === "GET":
          return getActivity();
        case url.endsWith("/api/invoice") && method === "GET":
          return getInvoice();
        case url.endsWith("/api/timeline") && method === "GET":
          return getTimeline();
        case url.endsWith("/api/pricing") && method === "GET":
          return getPricing();
        case url.endsWith("/api/media") && method === "GET":
          return getMedia();
        case url.endsWith("/api/charts") && method === "GET":
          return getCharts();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function getDashboardData() {
      const colors = [
        {
          backgroundColor: "rgba(88, 77, 130, 0.05)",
          borderColor: "rgba(88, 77, 130, 1)",
          pointBackgroundColor: "rgba(88, 77, 130, 1)",
          pointBorderColor: "#fff"
        },
        {
          backgroundColor: "#eeeeee",
          borderColor: "#eeeeee",
          pointBackgroundColor: "#eeeeee",
          pointBorderColor: "#fff"
        },
        {
          backgroundColor: "#5dcff3",
          borderColor: "#5dcff3",
          pointBackgroundColor: "#5dcff3",
          pointBorderColor: "#fff"
        }
      ];

      const labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      const datasets = [
        {
          label: "Sales",
          backgroundColor: "rgba(88, 77, 130, 1)",
          borderColor: "rgba(88, 77, 130, 1)",
          pointBackgroundColor: "rgba(88, 77, 130, 1)",
          pointBorderColor: "#fff",
          borderWidth: 0,
          data: [6]
        },
        {
          label: "Views",
          ...colors[1],
          borderWidth: 0,
          data: [5]
        }
      ];

      const data = {
        labels: ["Jul"],
        datasets
      };

      const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      const genData = max => {
        const randomData = [];
        for (let index = 0; index < max; index++) {
          randomData.push(randomIntFromInterval(4, 6));
        }
        return randomData;
      };

      const lineData = {
        labels,
        datasets: [
          {
            label: "Sales",
            ...colors[0],
            data: genData(12)
          }
        ]
      };

      const lineData2 = {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Sales",
            ...colors[0],
            data: genData(6)
          }
        ]
      };

      const dataPie = {
        labels: ["Download Sales", "In-Store Sales", "Mail Sales"],
        datasets: [
          {
            data: [350, 450, 100],
            backgroundColor: ["#584d82", "#eeeeee", "#5cad66"]
          }
        ]
      };

      const dashboardData = {
        chart: {
          type: "line",
          title: "Sales Analytics",
          subtitle: "Basic",
          data: lineData,
          options: {
            ...sharedOptions,
            ...gridOptions
          }
        },
        charts: [
          {
            type: "line",
            title: "Monthly page views",
            subtitle: "Basic",
            data: lineData2,
            options: {
              ...sharedOptions,
              ...gridOptions
            }
          },
          {
            type: "bar",
            title: "Revenue",
            subtitle: "Stacked",
            data,
            options: {
              ...sharedOptions,
              ...gridOptions
            }
          },
          {
            type: "pie",
            title: "Monthly visitors",
            subtitle: "Basic",
            data: dataPie,
            options: {
              ...sharedOptions,
              elements: {
                arc: {
                  borderWidth: 0.5
                }
              }
            }
          }
        ]
      };

      return ok(dashboardData);
    }

    function getMessages() {
      const data = MESSAGES;
      return ok(data);
    }

    function getMessage() {
      const messages = MESSAGES;

      const data = messages.find(x => x.id === idFromUrl());
      return ok(data);
    }

    function getTaskboard() {
      const data = {
        backlog: [
          {
            title: "Responsive bug",
            description:
              "Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.",
            color: "error",
            images: [
              `assets/images/unsplash/12.jpg`,
              `assets/images/unsplash/9.jpg`
            ]
          },
          {
            title: "Travel checklist",
            description:
              "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
          },
          {
            title: "Budget review",
            description:
              "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
            color: "success"
          }
        ],
        todo: [
          {
            title: "QA Testing",
            description: "Etiam porta sem malesuada magna mollis euismod."
          },
          {
            title: "Layout design",
            description:
              "Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
            color: "error"
          },
          {
            title: "Fix navigation menu",
            description: "Donec sed odio dui.",
            color: "info",

            images: [`assets/images/unsplash/1.jpg`]
          },
          {
            title: "Update bootstrap 4",
            description: "Aenean lacinia bibendum nulla sed consectetur."
          },
          {
            title: "Run build tools",
            description:
              "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          },
          {
            title: "List article ideas",
            description:
              "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
            color: "success",

            images: [
              `assets/images/unsplash/5.jpg`,
              `assets/images/unsplash/6.jpg`
            ]
          },
          {
            title: "Reactjs fixes",
            description:
              "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper."
          },
          {
            title: "Implement SSL",
            description:
              "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
            color: "warning"
          },
          {
            title: "Cleanup code",
            description: "Sollicitudin",
            color: "error"
          }
        ],
        "In Process": [
          {
            title: "QOS Assessment",
            description:
              "Maecenas sed diam eget risus varius blandit sit amet non magna."
          },
          {
            title: "Schedule new tasks",
            description: "Sed posuere consectetur est at lobortis.",
            color: "warning"
          },
          {
            title: "Add dashboard variants",
            description: "Nulla vitae elit libero, a pharetra augue."
          },
          {
            title: "Extended color scheme support",
            description:
              "Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          },
          {
            title: "Merge unit tests",
            description:
              "Maecenas sed diam eget risus varius blandit sit amet non magna.",
            color: "info",

            images: [
              `assets/images/unsplash/16.jpg`,
              `assets/images/unsplash/9.jpg`
            ]
          },
          {
            title: "Test final version",
            description:
              "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          }
        ],
        "Currently in progress": [
          {
            title: "Integrate Angular 4",
            description: "Nulla vitae elit libero, a pharetra augue."
          },
          {
            title: "Additional fields",
            description: "Donec id elit non mi porta gravida at eget metus."
          },
          {
            title: "Draggable task board",
            description:
              "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper.",
            color: "error"
          },
          {
            title: "Setup CI server",
            description: "Maecenas faucibus mollis interdum.",

            images: [
              `assets/images/unsplash/10.jpg`,
              `assets/images/unsplash/11.jpg`
            ]
          },
          {
            title: "Assign new tasks",
            description:
              "Nullam quis risus eget urna mollis ornare vel eu leo.",
            color: "success"
          },
          {
            title: "Contact administrator",
            description:
              "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          },
          {
            title: "Commit changes",
            description: "Aenean lacinia bibendum nulla sed consectetur.",

            images: [
              `assets/images/unsplash/13.jpg`,
              `assets/images/unsplash/14.jpg`
            ]
          }
        ],
        Complete: [
          {
            title: "Store new files",
            description: "Sed posuere consectetur est at lobortis."
          },
          {
            title: "Build landing page",
            description:
              "Maecenas sed diam eget risus varius blandit sit amet non magna."
          },
          {
            title: "Setup basic layout",
            description: "Vestibulum id ligula porta felis euismod semper.",
            color: "info",

            images: [
              `assets/images/unsplash/15.jpg`,
              `assets/images/unsplash/16.jpg`
            ]
          },
          {
            title: "Graphical fixes",
            description:
              "Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          },
          {
            title: "Email alerts",
            description: "Donec sed odio dui."
          }
        ]
      };

      return ok(data);
    }

    function getContacts() {
      const data = Array(12)
        .fill(0)
        .map((_, i) => {
          return {
            status: [
              "launched a new application",
              "removed event from calendar",
              "has joined your mailing list",
              "created a new task list",
              "added event to calendar",
              "opened a new ticket",
              "closed a ticket",
              "paid pending invoice"
            ][Math.floor(Math.random() * 8)],
            name: [
              "Megan Hanson",
              "Jeffrey Freeman",
              "Amber McCoy",
              "Megan Gibson",
              "Melissa Sanders",
              "Danielle Perkins",
              "Roy Matthews",
              "Samantha West"
            ][Math.floor(Math.random() * 8)],
            avatar: `assets/images/face${Math.floor(Math.random() * 7) +
              1}.jpg`,
            id: i
          };
        });

      return ok(data);
    }

    function getActivity() {
      const text = [
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus.",
        "Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod.",
        "Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
        "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla.",
        "Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue."
      ];
      const data = Array(8)
        .fill(0)
        .map((_, i) => {
          return {
            subtitle: [
              "Launched a new application",
              "Removed event from calendar",
              "Joined your mailing list",
              "Created a new task list",
              "Added event to calendar",
              "Opened a new ticket",
              "Closed a ticket",
              "Paid pending invoice"
            ][Math.floor(Math.random() * 8)],
            title: [
              "Megan Hanson",
              "Jeffrey Freeman",
              "Amber McCoy",
              "Megan Gibson",
              "Melissa Sanders",
              "Danielle Perkins",
              "Roy Matthews",
              "Samantha West"
            ][Math.floor(Math.random() * 8)],
            avatar: `assets/images/face${Math.floor(Math.random() * 4) +
              1}.jpg`,
            body: text[Math.floor(Math.random() * 7)],
            id: i
          };
        });

      return ok(data);
    }

    function getInvoice() {
      const data = {
        id: 45789,
        sender: {
          company: "Amazon AWS",
          name: "Francine Miles",
          email: "frank.miles98@example.com",
          location: {
            street: {
              number: 9502,
              name: "Rue de L'Abbé-Patureau"
            },
            city: "Montcherand",
            state: "Basel-Landschaft",
            country: "Switzerland",
            postcode: 6873
          }
        },
        receiver: {
          company: "Envato",
          name: "Austin Walker",
          email: "austin.walker94@example.com",
          location: {
            street: {
              number: 4147,
              name: "Calle de Toledo"
            },
            city: "Parla",
            state: "Castilla la Mancha",
            country: "Spain",
            postcode: 94329
          }
        },
        items: [
          {
            title: "Maintanance",
            subtitle: "Monthly web updates for http://www.themeforest.net",
            price: 250.0,
            quantity: 1
          },
          {
            title: "Recurring Bill (Hosting)",
            subtitle:
              "Monthly dedicated VPN web hosting (1 Jan - 30 Jan, 2014)",
            price: 652.87,
            quantity: 3
          },
          {
            title: "Recurring Bill (Domain)",
            subtitle: "2 year domain name purchase",
            price: 239.0,
            quantity: 3
          },
          {
            title: "Web design",
            subtitle: "PSD to HTML Conversion (3 pages)",
            price: 958.0,
            quantity: 1
          }
        ],
        createdAt: Date.now()
      };

      return ok(data);
    }

    function getTimeline() {
      const data = Array(10)
        .fill(0)
        .map((_, i) => {
          return {
            text: [
              "Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.",
              "Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
              "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Aenean lacinia bibendum nulla sed consectetur.",
              "Cras mattis consectetur purus sit amet fermentum.",
              "Aenean lacinia bibendum nulla sed consectetur.",
              "Donec sed odio dui."
            ][Math.floor(Math.random() * 8)],
            date: new Date(
              +new Date() - Math.floor(Math.random() * 10000000000)
            ),
            id: i
          };
        });

      return ok(data);
    }

    function getPricing() {
      const data = [
        {
          icon: "assets/animated-icons/book/book.json",
          title: "Standard Licence",
          subtitle: "Test account",
          price: 0,
          features: [
            {
              title: "Secure"
            },
            {
              title: "1 user"
            },
            {
              title: "Analytics"
            }
          ]
        },
        {
          icon: "assets/animated-icons/design/design.json",
          title: "Basic License",
          subtitle: "Freelancer",
          price: 10,
          features: [
            {
              title: "Secure"
            },
            {
              title: "2 users"
            },
            {
              title: "Analytics"
            }
          ]
        },
        {
          icon: "assets/animated-icons/shipped/shipped.json",
          title: "Managed License",
          subtitle: "Small business",
          price: 49,
          features: [
            {
              title: "Secure"
            },
            {
              title: "3 users"
            },
            {
              title: "Analytics"
            }
          ]
        },
        {
          icon: "assets/animated-icons/idea/idea.json",
          title: "Extended License",
          subtitle: "Corporate",
          price: 99,
          features: [
            {
              title: "Secure"
            },
            {
              title: "∞ users"
            },
            {
              title: "Analytics"
            }
          ]
        }
      ];
      return ok(data);
    }

    function getMedia() {
      const data = Array(24)
        .fill(0)
        .map((_, i) => {
          return {
            id: i + 1,
            image: `assets/images/unsplash/${i + 1}.jpg`
          };
        });

      return ok(data);
    }

    function getCharts() {
      const stackedGridOptions = {
        scales: {
          xAxes: [
            {
              gridLines: {
                color: "rgba(0,0,0,0.02)",
                zeroLineColor: "rgba(0,0,0,0.02)"
              },
              stacked: true
            }
          ],
          yAxes: [
            {
              gridLines: {
                color: "rgba(0,0,0,0)",
                zeroLineColor: "rgba(0,0,0,0.02)"
              },
              stacked: true,
              position: "left",
              ticks: {
                beginAtZero: true,
                suggestedMax: 9
              }
            }
          ]
        }
      };

      const colors = [
        {
          backgroundColor: "#584d82",
          borderColor: "#4d4373",
          pointBackgroundColor: "#584d82",
          pointBorderColor: "#fff"
        },
        {
          backgroundColor: "#eeeeee",
          borderColor: "#eeeeee",
          pointBackgroundColor: "#eeeeee",
          pointBorderColor: "#fff"
        },
        {
          backgroundColor: "#5dcff3",
          borderColor: "#5dcff3",
          pointBackgroundColor: "#5dcff3",
          pointBorderColor: "#fff"
        }
      ];

      const labels = ["1", "2", "3", "4", "5", "6", "7"];

      const datasets = [
        {
          label: "Sales",
          ...colors[0],

          data: [6, 5, 8, 8, 5, 5, 4]
        },
        {
          label: "Views",
          ...colors[1],

          data: [5, 4, 4, 2, 6, 2, 5]
        }
      ];

      const data = {
        labels,
        datasets
      };

      const lineData = {
        labels,
        datasets: [
          {
            label: "Sales",
            backgroundColor: "rgba(238, 238, 238, 0.05)",
            borderColor: "rgba(238, 238, 238, 1)",
            pointBackgroundColor: "rgba(238, 238, 238, 1)",
            pointBorderColor: "#fff",

            data: [6, 5, 8, 8, 5, 5, 4]
          },
          {
            label: "Views",
            backgroundColor: "rgba(88, 77, 130, 0.05)",
            borderColor: "rgba(88, 77, 130, 1)",
            pointBackgroundColor: "rgba(88, 77, 130, 1)",
            pointBorderColor: "#fff",
            data: [5, 4, 4, 2, 6, 2, 5]
          }
        ]
      };

      const dataStepped = {
        labels,
        datasets: [
          {
            steppedLine: true,
            fill: false,
            label: "Sales",
            ...colors[0],
            data: [6, 5, 8, 8, 5, 5, 4]
          },
          {
            steppedLine: true,
            fill: false,
            label: "Views",
            ...colors[1],
            data: [5, 4, 4, 2, 6, 2, 5]
          }
        ]
      };

      const dataPoints = {
        labels,
        datasets: [
          {
            fill: false,
            pointRadius: 10,
            pointHoverRadius: 15,
            showLine: false,
            label: "Sales",
            ...colors[0],
            data: [6, 5, 8, 8, 5, 5, 4]
          },
          {
            fill: false,
            pointRadius: 10,
            pointHoverRadius: 15,
            showLine: false,
            label: "Views",
            ...colors[1],
            data: [5, 4, 4, 2, 6, 2, 5]
          }
        ]
      };

      const dataMixed = {
        labels,
        datasets: [
          {
            label: "Sales",
            type: "line",
            data: [6, 5, 6, 8, 5, 5, 4],
            ...colors[0],
            yAxisID: "y-axis-2"
          },
          {
            type: "bar",
            label: "Visitor",
            data: [5, 6, 4, 3, 6, 4, 5],
            ...colors[1],
            yAxisID: "y-axis-1"
          }
        ]
      };

      const options = {
        responsive: true,
        tooltips: {
          mode: "label"
        },
        elements: {
          line: {
            fill: false
          }
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false
              },
              labels
            }
          ],
          yAxes: [
            {
              type: "linear",
              display: true,
              position: "left",
              id: "y-axis-1",
              gridLines: {
                display: false
              },
              labels: {
                show: true
              }
            },
            {
              type: "linear",
              display: true,
              position: "right",
              id: "y-axis-2",
              gridLines: {
                display: false
              },
              labels: {
                show: true
              }
            }
          ]
        }
      };

      const dataBubble = {
        labels: ["January"],
        datasets: [
          {
            label: "Sales",
            fill: true,
            lineTension: 0.1,
            ...colors[0],
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
              {
                x: 6,
                y: 5,
                r: 15
              },
              {
                x: 5,
                y: 4,
                r: 10
              },
              {
                x: 8,
                y: 4,
                r: 6
              },
              {
                x: 8,
                y: 4,
                r: 6
              },
              {
                x: 5,
                y: 14,
                r: 14
              },
              {
                x: 5,
                y: 6,
                r: 8
              },
              {
                x: 4,
                y: 2,
                r: 10
              }
            ],
            borderWidth: 0.5
          }
        ]
      };

      const dataDoughnut = {
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        datasets: [
          {
            data: [350, 450, 100],
            backgroundColor: ["#584d82", "#eeeeee", "#5cad66"]
          }
        ]
      };

      const dataPie = {
        labels: ["Download Sales", "In-Store Sales", "Mail Sales"],
        datasets: [
          {
            data: [350, 450, 100],
            backgroundColor: ["#584d82", "#eeeeee", "#5cad66"]
          }
        ]
      };

      const dataPolar = {
        datasets: [
          {
            data: [350, 450, 100],
            backgroundColor: ["#584d82", "#eeeeee", "#5cad66"]
          }
        ],
        labels: ["Download Sales", "In-Store Sales", "Mail Sales"]
      };

      const dataRadar = {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running"
        ],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "rgba(238, 238, 238, 0.05)",
            borderColor: "rgba(238, 238, 238, 1)",
            pointBackgroundColor: "rgba(238, 238, 238, 1)",
            pointBorderColor: "#fff",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "Views",
            backgroundColor: "rgba(88, 77, 130, 0.05)",
            borderColor: "rgba(88, 77, 130, 1)",
            pointBackgroundColor: "rgba(88, 77, 130, 1)",
            pointBorderColor: "#fff",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      };

      const chartData = [
        {
          type: "bar",
          title: "Bar",
          subtitle: "Basic",
          data,
          options: {
            ...sharedOptions,
            ...gridOptions
          }
        },
        {
          type: "horizontalBar",
          title: "Bar",
          subtitle: "Horizontal",
          data,
          options: {
            ...sharedOptions,
            ...gridOptions
          }
        },
        {
          type: "bar",
          title: "Bar",
          subtitle: "Stacked",
          data,
          options: {
            ...sharedOptions,
            ...gridOptions,
            ...stackedGridOptions
          }
        },
        {
          type: "line",
          title: "Line",
          subtitle: "Basic",
          data: lineData,
          options: {
            ...sharedOptions,
            ...gridOptions
          }
        },
        {
          type: "line",
          title: "Line",
          subtitle: "Stepped",
          data: dataStepped,
          options: {
            ...sharedOptions,
            ...gridOptions
          }
        },
        {
          type: "line",
          title: "Line",
          subtitle: "Points",
          data: dataPoints,
          options: {
            ...sharedOptions,
            ...gridOptions,
            responsive: true,
            elements: {
              point: {
                pointStyle: "rectRot"
              }
            }
          }
        },
        {
          type: "bar",
          title: "Line and Bar",
          subtitle: "Mixed",
          data: dataMixed,
          options: {
            ...sharedOptions,
            ...gridOptions,
            ...options
          }
        },
        {
          type: "bubble",
          title: "Misc",
          subtitle: "Bubble",
          data: dataBubble,
          options: {
            ...sharedOptions,
            ...gridOptions
          }
        },
        {
          type: "doughnut",
          title: "Misc",
          subtitle: "Doughnut",
          data: dataDoughnut,
          options: {
            ...sharedOptions,
            elements: {
              arc: {
                borderWidth: 0.5
              }
            }
          }
        },
        {
          type: "pie",
          title: "Misc",
          subtitle: "Pie",
          data: dataPie,
          options: {
            ...sharedOptions,
            elements: {
              arc: {
                borderWidth: 0.5
              }
            }
          }
        },
        {
          type: "polarArea",
          title: "Misc",
          subtitle: "Polar",
          data: dataPolar,
          options: {
            ...sharedOptions,
            elements: {
              arc: {
                borderWidth: 0.5
              }
            }
          }
        },
        {
          type: "radar",
          title: "Misc",
          subtitle: "Radar",
          data: dataRadar,
          options: {
            ...sharedOptions
          }
        }
      ];

      return ok(chartData);
    }

    // helper functions

    // tslint:disable-next-line:no-shadowed-variable
    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function idFromUrl() {
      const urlParts = url.split("/");
      // tslint:disable-next-line:radix
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
